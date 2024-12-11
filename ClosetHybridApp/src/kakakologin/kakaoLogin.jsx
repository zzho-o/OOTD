import {Alert} from 'react-native';
import {login} from '@react-native-seoul/kakao-login'; // Kakao 로그인 라이브러리에서 가져옴
import {supabase} from '../supabase/supabaseClient';

const LoginWithKakao = async ({navigation}) => {
  try {
    // Kakao 로그인
    const {idToken} = await login();
    if (!idToken) {
      Alert.alert('Login Error', 'Failed to login with Kakao.');
      return;
    }

    // Supabase 로그인 요청
    console.log('ID Token:', idToken);
    const {data, error} = await supabase.auth.signInWithIdToken({
      provider: 'kakao',
      token: idToken,
    });

    console.log('Supabase Auth Response Data:', data);
    console.log('Supabase Auth Response Error:', error);

    if (data) {
      console.log(data.user);
      navigation.navigate('Bottombar');
    }

    if (error) {
      Alert.alert('Login Error', `Supabase Auth Error: ${error.message}`);
    }
  } catch (e) {
    Alert.alert('Login Error', e.message);
  }
};

export default LoginWithKakao;
