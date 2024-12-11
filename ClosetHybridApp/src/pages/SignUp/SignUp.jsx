import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import SignUpstyles from './SignUpstyle';
import {useState, useEffect} from 'react';
import {TopbarSub} from '../../components/Topbar/Topbar';
import {supabase} from '../../supabase/supabaseClient';
import {useNavigation, useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import getPhotoWithPermission from './Checkper';

const profile = require('../../assets/signup/Profile.png');
const confirm = require('../../assets/signup/confirm.png');
const doubleCheck = require('../../assets/signup/DoubleCheck.png');
const arrowdown = require('../../assets/signup/Arrow_down.png');
const warning = require('../../assets/signup/warning.png');

const SignUp = () => {
  const route = useRoute();
  const {checkStates} = route.params;
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('남자');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [insta, setInsta] = useState('');
  const [showPw, setShowPw] = useState(true);
  const [ismailDuplicate, setIsmailDuplicate] = useState(false);
  const [isidDuplicate, setIsidDuplicate] = useState(false);
  const [buttonOn, setbuttonOn] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [fileName, setfileName] = useState('');
  const navigation = useNavigation();

  const selectImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      cropping: true, // 이미지 크롭 기능 사용
    })
      .then(image => {
        const {path, filename} = image;
        const newFilename = filename || `${Date.now()}.jpg`;
        setProfileImage({uri: path});
        setfileName(newFilename);

        // 예시: 이미지 업로드 함수 호출
      })
      .catch(error => {
        if (error.message.includes('User cancelled image selection')) {
          console.log('사용자가 이미지를 선택하지 않았습니다.');
        } else {
          console.log('ImagePicker 오류:', error.message);
        }
      });
  };

  const uploadImage = async (filePath, filename) => {
    try {
      // 이미지 업로드
      const {data: uploadData, error: uploadError} = await supabase.storage
        .from('test_storage_img')
        .upload(`profile/${filename}`, filePath, {
          contentType: 'image/jpg',
        });

      if (uploadError) {
        throw uploadError;
      }

      // 업로드된 파일의 public URL 가져오기
      const {data: urlData, error: urlError} = await supabase.storage
        .from('test_storage_img')
        .getPublicUrl(`profile/${filename}`);

      if (urlError) {
        throw urlError;
      }

      // URL 반환
      return urlData.publicUrl;
    } catch (error) {
      Alert.alert('업로드 실패', error.message);
      return null; // 오류 발생 시 null 반환
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectGender = gender => {
    setSelectedGender(gender);
    setDropdownVisible(false);
  };

  const handleChangemail = text => {
    setEmail(text);
    if (ismailDuplicate) setIsmailDuplicate(false);
  };

  const handleChangeid = text => {
    setId(text);
    if (isidDuplicate) setIsidDuplicate(false);
  };

  useEffect(() => {
    // 비밀번호 길이와 중복 여부를 모두 체크하여 buttonOn을 설정
    const isPasswordValid = password.length >= 6;
    setbuttonOn(ismailDuplicate && isidDuplicate && isPasswordValid);
  }, [ismailDuplicate, isidDuplicate, password]);

  const checkEmailForm = mail => {
    const regex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(mail);
  };

  const checkIdForm = id => {
    const idregex = /^[a-zA-Z0-9._-]{3,20}$/;
    return idregex.test(id);
  };

  const checkDuplication = async (column, value, setState) => {
    try {
      const trimmedValue = value.trim(); // 공백 제거

      const {data, error} = await supabase
        .from('profiles') // 테이블 이름
        .select(column) // 조회할 컬럼
        .eq(column, trimmedValue); // 입력한 값과 일치하는지 확인

      if (error) {
        Alert.alert('Error', error.message);
      } else if (data && data.length > 0) {
        // 데이터가 존재하면 중복된 값으로 판단
        setState(false);
        Alert.alert(`중복된 ${column} 입니다!`, value);
      } else if (column == 'email' && !checkEmailForm(email)) {
        Alert.alert('이메일 형식으로 입력해주세요!');
      } else if (column == 'profile_id' && !checkIdForm(id)) {
        Alert.alert('아이디는 3~20자 영어/숫자/_ - .만 입력가능합니다!');
      } else {
        setState(true);
        Alert.alert(`사용가능한 ${column} 입니다!`);
      }
    } catch (error) {
      Alert.alert('Unexpected Error', error.message);
    }
  };

  const signUpWithEmail = async () => {
    try {
      let imageUrl = null;
      // 1. 프로필 이미지가 있는 경우 업로드하고 URL 가져오기
      if (profileImage) {
        imageUrl = await uploadImage(profileImage, fileName);
      }

      // 2. Supabase 회원가입
      const {
        data: {session},
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            profile_id: `@${id}`,
            nickname: nickname,
            instagram: insta,
            avatar_url: imageUrl, // 업로드된 이미지 URL 설정
            is_marketing_opted_in: checkStates.marketing,
            data_sharing_opt_in: checkStates.thirdParty,
            gender: selectedGender,
          },
        },
      });

      if (error) {
        Alert.alert(error.message);
      } else if (!session) {
        Alert.alert('Please check your inbox for email verification!');
      } else {
        Alert.alert('회원가입 성공!');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('회원가입 중 오류 발생:', error.message);
    }
  };

  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: 'white'}}>
      <TopbarSub title={'회원가입'} />

      <View style={SignUpstyles.Main}>
        <TouchableOpacity
          style={SignUpstyles.profileSection}
          onPress={() => getPhotoWithPermission(selectImage)}>
          {profileImage ? (
            <Image source={profileImage} style={SignUpstyles.profileImg} />
          ) : (
            <Image source={profile} />
          )}
          {profileImage ? (
            <Text style={SignUpstyles.thickFont}>재선택</Text>
          ) : (
            <Text style={SignUpstyles.thickFont}>프로필 선택</Text>
          )}
        </TouchableOpacity>

        <View>
          <Text>이메일 (필수)</Text>
          <View style={SignUpstyles.inputsty}>
            <TextInput
              placeholder="이메일 형식으로 작성"
              value={email}
              onChangeText={handleChangemail}
              keyboardType="email-address"
              style={SignUpstyles.inputform}
            />
            <TouchableOpacity
              onPress={() =>
                checkDuplication('email', email, setIsmailDuplicate)
              }
              disabled={ismailDuplicate}>
              <Image source={confirm} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>비밀번호 (필수)</Text>
          <View style={SignUpstyles.inputpw}>
            <TextInput
              placeholder="6자 이상 입력"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={showPw}
              style={{padding: 2, flex: 1}}
            />
            <TouchableOpacity
              onPress={() => setShowPw(!showPw)}
              style={{paddingRight: 10}}>
              <Text>{showPw ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>사용자 아이디 (필수)</Text>
          <View style={SignUpstyles.inputsty}>
            <TextInput
              placeholder="이후에 변경가능"
              value={id}
              onChangeText={handleChangeid}
              style={SignUpstyles.inputform}
            />
            <TouchableOpacity
              onPress={() =>
                checkDuplication('profile_id', id, setIsidDuplicate)
              }
              disabled={isidDuplicate}>
              <Image source={doubleCheck} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={SignUpstyles.inputsty}>
          <Text style={SignUpstyles.thickFont}>선택 정보 입력</Text>
          <Image source={arrowdown} />
        </View>

        <View>
          <Text>닉네임</Text>
          <View style={SignUpstyles.inputsty}>
            <TextInput
              value={nickname}
              onChangeText={setNickname}
              style={SignUpstyles.inputform}
            />
          </View>
        </View>

        <View>
          <Text>인스타 아이디</Text>
          <View style={SignUpstyles.inputsty}>
            <TextInput
              value={insta}
              onChangeText={setInsta}
              style={SignUpstyles.inputform}
            />
          </View>
        </View>

        <View>
          <Text>성별</Text>
          <View style={SignUpstyles.inputsty}>
            <TouchableOpacity
              style={SignUpstyles.gender}
              onPress={toggleDropdown}>
              <Text>{selectedGender}</Text>
              <Image source={arrowdown} />
            </TouchableOpacity>
            {dropdownVisible && (
              <View
                style={{
                  position: 'absolute',
                  top: 25, // 드롭다운이 열릴 위치
                  left: 0,
                  right: 0,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  zIndex: 1, // 드롭다운이 다른 요소 위에 나타나도록 설정
                }}>
                <TouchableOpacity onPress={() => selectGender('남자')}>
                  <Text style={{padding: 10}}>남자</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectGender('여자')}>
                  <Text style={{padding: 10}}>여자</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectGender('None')}>
                  <Text style={{padding: 10}}>None</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={SignUpstyles.warningsty}>
            <Image source={warning} />
            <Text>필수 입력란을 넣어주세요 !</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={buttonOn ? SignUpstyles.SignUpBtn : SignUpstyles.SignUpfalse}
        onPress={() => signUpWithEmail()}
        disabled={!buttonOn}>
        <Text
          style={
            buttonOn ? SignUpstyles.SignUpText : SignUpstyles.SignUpfalseText
          }>
          회원가입
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;
