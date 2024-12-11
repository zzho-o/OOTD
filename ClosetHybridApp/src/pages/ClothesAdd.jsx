import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Topbar, TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {REACT_APP_WEBVIEW_URL} from '@env';
import CaptureScreen from '../components/Capture/CaptureScreen';
import ViewShot from 'react-native-view-shot';
import ImagePicker from 'react-native-image-crop-picker';
import getPhotoWithPermission from './SignUp/Checkper';
import {supabase} from '../supabase/supabaseClient';

const ClothesAdd = () => {
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const viewShotRef = useRef(null); // Use a separate ref for ViewShot
  const [buttonState, setButtonState] = useState('Album');
  const [webViewURL, setWebViewURL] = useState(
    `${REACT_APP_WEBVIEW_URL}/clothesImgAdd`,
  );
  const [currentUrl, setCurrentUrl] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleNavigationChange = navState => {
    const index = navState.url.lastIndexOf('/');
    const result = navState.url.slice(index + 1);
    setCurrentUrl(result);
  };

  const handleMessage = event => {
    const message = event.nativeEvent.data;

    if (message.startsWith('https://www.google.com/search')) {
      setWebViewURL(message);
    } else if (message === 'Album') {
      setButtonState('Album');
      // getPhotoWithPermission(selectImage);
    } else if (message === 'Internet') {
      setButtonState('Internet');
    }
  };

  const handleGoBack = () => {
    if (webViewRef.current) {
      setWebViewURL(`${REACT_APP_WEBVIEW_URL}/clothesImgAdd`);
      webViewRef.current.goBack();
    }
  };

  const navigationGoBack = () => {
    navigation.goBack();
  };

  const btnClick = () => {
    setWebViewURL(`${REACT_APP_WEBVIEW_URL}/clothesAdd`);
  };

  const addBtnClick = () => {
    navigation.navigate('Closet');
  };

  useEffect(() => {}, [webViewURL]);

  const uploadImage = async (filePath, filename) => {
    try {
      const {data: uploadData, error: uploadError} = await supabase.storage
        .from('test_storage_img')
        .upload(`clothes/${filename}`, filePath, {
          contentType: 'image/jpg',
        });

      if (uploadError) {
        throw uploadError;
      }

      const {data: urlData, error: urlError} = await supabase.storage
        .from('test_storage_img')
        .getPublicUrl(`clothes/${filename}`);

      if (urlError) {
        throw urlError;
      }

      return urlData.publicUrl;
    } catch (error) {
      Alert.alert('업로드 실패', error.message);
      return null;
    }
  };

  const selectImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      cropping: true,
    })
      .then(image => {
        const {path, filename} = image;
        const newFilename = filename || `${Date.now()}.jpg`;
        setProfileImage({uri: path});
        setFileName(newFilename);

        uploadImage(path, newFilename); // Pass path and filename directly
      })
      .catch(error => {
        if (error.message.includes('User cancelled image selection')) {
          console.log('사용자가 이미지를 선택하지 않았습니다.');
        } else {
          console.log('ImagePicker 오류:', error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      {currentUrl === 'clothesImgAdd' && (
        <TopbarSub title={'옷 등록'} func={navigationGoBack} />
      )}
      {currentUrl === 'clothesAdd' && (
        <TopbarSub title={'옷 등록'} func={handleGoBack} />
      )}
      <ViewShot ref={viewShotRef} style={styles.viewContainer}>
        <WebView
          ref={webViewRef}
          source={{uri: webViewURL}}
          onNavigationStateChange={handleNavigationChange}
          onMessage={handleMessage}
        />
      </ViewShot>
      {currentUrl === 'clothesImgAdd' && buttonState === 'Album' && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={btnClick} style={styles.button}>
            <Text style={styles.buttonText}>선택한 사진 추가</Text>
          </TouchableOpacity>
        </View>
      )}
      {(currentUrl === 'clothesImgAdd' && buttonState === 'Internet') ||
        (webViewURL.startsWith('https://www.google.com/search') && (
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => CaptureScreen(viewShotRef)}
              style={styles.captureButton}>
              <Text style={styles.buttonText}>캡쳐하기</Text>
            </TouchableOpacity>
          </View>
        ))}
      {currentUrl === 'clothesAdd' && (
        <View style={styles.addButtonWrapper}>
          <TouchableOpacity onPress={addBtnClick} style={styles.button}>
            <Text style={styles.buttonText}>등록하기</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  viewContainer: {
    flex: 1,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 31,
    paddingVertical: 6,
    backgroundColor: '#ffffff',
    zIndex: 1000,
  },
  addButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 31,
    paddingVertical: 6,
    zIndex: 1000,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#ffbe98',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  captureButton: {
    position: 'absolute',
    bottom: 6,
    left: 31,
    width: 351,
    height: 56,
    backgroundColor: '#ffbe98',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 1001,
  },
});

export default ClothesAdd;
