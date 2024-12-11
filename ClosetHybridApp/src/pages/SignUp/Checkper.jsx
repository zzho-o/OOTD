import {PermissionsAndroid, Platform, Alert} from 'react-native';

// 권한 요청 함수
const requestPermission = async permission => {
  try {
    const granted = await PermissionsAndroid.request(permission);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
      Alert.alert(
        'Permission denied',
        'You need to grant permission to proceed.',
      );
      return false;
    } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Alert.alert(
        'Permission Denied',
        'You have denied permission and selected "Never ask again". Please enable it from settings.',
      );
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

const getPhotoWithPermission = async select => {
  if (Platform.OS === 'android') {
    const permissionGranted = await requestPermission(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    );
    if (permissionGranted) {
      select();
    }
  }
};

export default getPhotoWithPermission;
