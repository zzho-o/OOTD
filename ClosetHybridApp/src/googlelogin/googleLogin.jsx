import {supabase} from '../supabase/supabaseClient';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GOOGLE_APP_CLIENT_ID} from '@env';

const signInWithGoogle = async navigation => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: REACT_APP_GOOGLE_CLIENT_ID,
    androidClientId: REACT_APP_GOOGLE_APP_CLIENT_ID,
  });

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    if (userInfo.idToken) {
      // 사용자 정보를 Supabase에 저장
      const {data, error} = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: userInfo.idToken,
      });
      navigation.navigate('Bottombar');
    } else {
      throw new Error('No ID token present!');
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // User cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // Operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // Play services not available or outdated
    } else {
      console.log('Sign-in error:', error.message);
    }
  }
};

export default signInWithGoogle;
