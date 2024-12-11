import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import Loginstyles from './Loginstyle';
import CheckBox from '@react-native-community/checkbox';
import {supabase} from '../../supabase/supabaseClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signInWithGoogle from '../../googlelogin/googleLogin';
import LoginWithKakao from '../../kakakologin/kakaoLogin';

const PersonIcon = require('../../assets/signup/Person_Icon.png');
const LockIcon = require('../../assets/signup/Lock_Icon.png');
const GoogleLogo = require('../../assets/logo/google.png');
const KakaoLogo = require('../../assets/logo/kakako.png');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [showPw, setShowPw] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // 앱이 시작될 때, "로그인 유지" 상태 확인
    const checkRememberMe = async () => {
      const value = await AsyncStorage.getItem('rememberMe');
      if (value === 'true') {
        const {data: session} = await supabase.auth.getSession();
        if (session) {
          // 사용자가 이미 로그인되어 있으면, 메인 화면으로 이동
          navigation.navigate('Bottombar');
        }
      }
    };

    checkRememberMe();
  }, []);

  const handleCheck = () => {
    setChecked(!isChecked);
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    const {error} = await supabase.auth.signInWithPassword({email, password});

    if (error) {
      Alert.alert('로그인 실패', error.message);
    } else {
      if (rememberMe) {
        await AsyncStorage.setItem('rememberMe', 'true');
      }
      Alert.alert('로그인 성공');
      navigation.navigate('Bottombar');
    }
  };

  return (
    <SafeAreaView style={Loginstyles.container}>
      <View />

      <View style={Loginstyles.Main}>
        <TouchableOpacity
          style={Loginstyles.GoogleLogin}
          onPress={() => signInWithGoogle(navigation)}>
          <Image source={GoogleLogo} style={{width: 30, height: 30}} />
          <Text style={Loginstyles.LoginFont}>구글 계정으로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => LoginWithKakao({navigation})}
          style={Loginstyles.KakaoLogin}>
          <Image source={KakaoLogo} style={{width: 30, height: 30}} />
          <Text style={Loginstyles.LoginFont}>카카오 계정으로 로그인</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5,
          }}>
          <View style={Loginstyles.line} />
          <Text>or</Text>
          <View style={Loginstyles.line}></View>
        </View>
        <View style={{gap: 12}}>
          <View style={Loginstyles.LoginInput}>
            <Image source={PersonIcon} />
            <TextInput
              placeholder="이메일"
              placeholderTextColor="rgba(204, 204, 204, 1)"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={{flex: 1}}></TextInput>
          </View>
          <View style={Loginstyles.LoginInput}>
            <Image source={LockIcon} />
            <TextInput
              placeholder="비밀번호"
              placeholderTextColor="rgba(204, 204, 204, 1)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={showPw}
              style={{flex: 1}}></TextInput>
            <TouchableOpacity
              onPress={() => setShowPw(!showPw)}
              style={{paddingRight: 10}}>
              <Text style={{color: 'rgba(140, 140, 140, 1)'}}>
                {showPw ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Loginstyles.FindOption}>
            <TouchableOpacity
              style={{fontSize: 12, color: 'rgba(140, 140, 140, 1)'}}>
              <Text>비밀번호 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Terms')}
              style={{fontSize: 12, color: 'rgba(140, 140, 140, 1)'}}>
              <Text>회원가입</Text>
            </TouchableOpacity>
          </View>
          <View style={Loginstyles.RememberMe}>
            {/* <Image source={CheckBox} /> */}
            <CheckBox
              value={isChecked}
              onValueChange={handleCheck}
              tintColors={{
                true: 'rgba(255, 190, 152, 1)',
                false: 'rgba(204, 204, 204, 1)',
              }} // 체크박스의 색상
            />
            <Text>로그인 유지</Text>
          </View>
          <TouchableOpacity style={Loginstyles.LoginBtn} onPress={handleLogin}>
            <Text style={{fontSize: 20, color: 'white'}}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
