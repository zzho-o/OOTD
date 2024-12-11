import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {Termsstyles} from './Termsstyle';
import {TopbarSub} from '../../components/Topbar/Topbar';
import {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Terms = ({navigation}) => {
  const {width, height} = useWindowDimensions(); // 현재 화면의 가로, 세로 크기
  const [isDisabled, setIsDisabled] = useState(true);
  const isLandscape = width > height; // 가로 모드인지 여부 확인
  const Container = isLandscape ? ScrollView : SafeAreaView;

  const [checkStates, setCheckStates] = useState({
    allAgree: false,
    serviceTerms: false,
    privacyPolicy: false,
    marketing: false,
    thirdParty: false,
  });

  const handleCheckAll = () => {
    const allChecked = !checkStates.allAgree;
    setCheckStates({
      allAgree: allChecked,
      serviceTerms: allChecked,
      privacyPolicy: allChecked,
      marketing: allChecked,
      thirdParty: allChecked,
    });
  };

  const handleIndividualCheck = key => {
    setCheckStates(prevStates => {
      const newStates = {
        ...prevStates,
        [key]: !prevStates[key],
      };
      const allChecked =
        newStates.serviceTerms &&
        newStates.privacyPolicy &&
        newStates.marketing &&
        newStates.thirdParty;
      return {
        ...newStates,
        allAgree: allChecked,
      };
    });
  };

  useEffect(() => {
    setIsDisabled(!(checkStates.serviceTerms && checkStates.privacyPolicy));
  }, [checkStates.serviceTerms, checkStates.privacyPolicy]);

  const handlePress = () => {
    if (!isDisabled) {
      navigation.navigate('SignUp', {checkStates});
    }
  };

  return (
    <SafeAreaView style={Termsstyles.container}>
      <TopbarSub title={'이용약관'} />
      <View style={Termsstyles.Main}>
        <Text style={Termsstyles.thickFont}>Closet{'\n'}서비스 이용약관</Text>

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={handleCheckAll}>
          <CheckBox
            value={checkStates.allAgree}
            onValueChange={handleCheckAll}
            tintColors={{
              true: 'rgba(255, 190, 152, 1)',
              false: 'rgba(204, 204, 204, 1)',
            }}
          />
          <Text
            style={
              checkStates.allAgree
                ? Termsstyles.slimFont
                : Termsstyles.slimFontfalse
            }>
            모두 동의 (선택 정보 포함)
          </Text>
        </TouchableOpacity>

        <View style={Termsstyles.line} />

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => handleIndividualCheck('serviceTerms')}>
          <CheckBox
            value={checkStates.serviceTerms}
            onValueChange={() => handleIndividualCheck('serviceTerms')}
            tintColors={{
              true: 'rgba(255, 190, 152, 1)',
              false: 'rgba(204, 204, 204, 1)',
            }}
          />
          <Text
            style={
              checkStates.serviceTerms
                ? Termsstyles.slimFont
                : Termsstyles.slimFontfalse
            }>
            Closet 서비스 이용약관에 동의 (필수)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => handleIndividualCheck('privacyPolicy')}>
          <CheckBox
            value={checkStates.privacyPolicy}
            onValueChange={() => handleIndividualCheck('privacyPolicy')}
            tintColors={{
              true: 'rgba(255, 190, 152, 1)',
              false: 'rgba(204, 204, 204, 1)',
            }}
          />
          <Text
            style={
              checkStates.privacyPolicy
                ? Termsstyles.slimFont
                : Termsstyles.slimFontfalse
            }>
            개인정보 수집 및 이용에 동의 (필수)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => handleIndividualCheck('marketing')}>
          <CheckBox
            value={checkStates.marketing}
            onValueChange={() => handleIndividualCheck('marketing')}
            tintColors={{
              true: 'rgba(255, 190, 152, 1)',
              false: 'rgba(204, 204, 204, 1)',
            }}
          />
          <Text
            style={
              checkStates.marketing
                ? Termsstyles.slimFont
                : Termsstyles.slimFontfalse
            }>
            광고 및 마케팅 수신 동의 (선택)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => handleIndividualCheck('thirdParty')}>
          <CheckBox
            value={checkStates.thirdParty}
            onValueChange={() => handleIndividualCheck('thirdParty')}
            tintColors={{
              true: 'rgba(255, 190, 152, 1)',
              false: 'rgba(204, 204, 204, 1)',
            }}
          />
          <Text
            style={
              checkStates.thirdParty
                ? Termsstyles.slimFont
                : Termsstyles.slimFontfalse
            }>
            개인정보 제3자 제공 동의 (선택)
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handlePress}
        style={isDisabled ? Termsstyles.SignUpfalse : Termsstyles.SignUpBtn}
        disabled={isDisabled}>
        <Text style={Termsstyles.SignUpText}>다음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Terms;
