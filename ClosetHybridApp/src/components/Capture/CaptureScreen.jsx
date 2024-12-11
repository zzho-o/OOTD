import {captureRef} from 'react-native-view-shot';
import ImageCropPicker from 'react-native-image-crop-picker';
import {supabase} from '../../supabase/supabaseClient';

// 화면 캡처
const CaptureScreen = async viewRef => {
  try {
    const uri = await captureRef(viewRef.current, {
      format: 'png',
      quality: 0.8,
    });

    // 이미지 편집
    ImageCropPicker.openCropper({
      path: uri,
      width: 300,
      height: 300,
    })
      .then(image => {
        // 편집된 이미지의 URI
        uploadImageToSupabase(image.path);
      })
      .catch(error => {
        console.error('Image editing error:', error);
      });
  } catch (error) {
    console.error('Capture error:', error);
  }
};

// Supabase Storage에 이미지 업로드
const uploadImageToSupabase = async imageUri => {
  try {
    const fileName = `${Date.now()}.png`;

    const {data, error} = await supabase.storage
      .from('test_storage_img') // Supabase Storage의 버킷 이름
      .upload(
        `profile/${fileName}`,
        {
          uri: imageUri,
          type: 'image/png', // 필요한 경우 MIME 타입을 조정합니다.
          name: fileName,
        },
        {
          contentType: 'image/png',
        },
      );

    if (error) {
      throw error;
    }

    console.log('Image uploaded successfully:', data);
  } catch (error) {
    console.error('Upload error:', error);
  }
};

export default CaptureScreen;
