import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Topbar, TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {REACT_APP_WEBVIEW_URL} from '@env';
import {EditModal, ShareModal} from '../components/Modals/EditModal';
import {useNavigation} from '@react-navigation/native';
import ClosetAddModal from '../components/Modals/ClosetAddModal';

const alarmIcon = require('../assets/topbar/Alarm_Icon.png');
const addIcon = require('../assets/topbar/addIcon.png');
const shareIcon = require('../assets/topbar/shareIcon.png');
const moreIcon = require('../assets/topbar/moreIcon.png');

const Closet = () => {
  console.log(REACT_APP_WEBVIEW_URL);
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [addClosetModal, setAddClosetModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [closetState, setClosetState] = useState('Closet');
  const handleMessage = event => {
    const message = event.nativeEvent.data;
    setClosetState(message);
  };
  const handleNavigationChange = navState => {
    const index = navState.url.lastIndexOf('/');
    const result = navState.url.slice(index + 1);
    setCurrentUrl(result);
  };
  const handleGoBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };
  const clothesAddBtn = () => {
    navigation.navigate('clothesImgAdd');
  };
  const alarmBtn = () => {
    navigation.navigate('alarm');
  };
  const modalOn = () => {
    setEditModal(!editModal);
  };
  const addClosetModalBtn = () => {
    setAddClosetModal(!addClosetModal);
  };
  const shareOn = () => {
    setShareModal(!shareModal);
  };
  useEffect(() => {
    if (closetState === 'closetAdd') {
      setAddClosetModal(!addClosetModal);
    } else if (closetState === 'lookbookAdd') {
      navigation.navigate('lookbookImgAdd');
    }
  }, [closetState]);
  return (
    <View style={styles.container}>
      {currentUrl === 'closet' && (
        <Topbar
          title={'내 옷장'}
          icon1={alarmIcon}
          icon2={addIcon}
          icon1Func={alarmBtn}
          icon2Func={closetState === 'Closet' ? addClosetModalBtn : null}
        />
      )}
      {currentUrl === 'closetDetail' && (
        <TopbarSub
          title={'옷장 이름'}
          func={handleGoBack}
          icon1={shareIcon}
          icon2={addIcon}
          icon1Func={shareOn}
          icon2Func={clothesAddBtn}
        />
      )}
      {currentUrl === 'LookbookDetail' && (
        <TopbarSub
          title={'룩북 상세보기'}
          func={handleGoBack}
          icon1={moreIcon}
          icon2={shareIcon}
          icon1Func={modalOn}
          icon2Func={shareOn}
        />
      )}
      {currentUrl === 'clothesDetail' && (
        <TopbarSub
          title={'옷 상세보기'}
          func={handleGoBack}
          icon1={moreIcon}
          icon2={shareIcon}
          icon1Func={modalOn}
          icon2Func={shareOn}
        />
      )}
      {currentUrl === 'clothesAdd' && (
        <TopbarSub title={'옷 등록'} func={handleGoBack} />
      )}
      {currentUrl === 'clothesImgAdd' && (
        <TopbarSub title={'옷 등록'} func={handleGoBack} />
      )}
      {currentUrl === 'clothesEdit' && (
        <TopbarSub title={'옷 수정'} func={handleGoBack} />
      )}
      <WebView
        ref={webViewRef}
        source={{uri: `${REACT_APP_WEBVIEW_URL}/closet`}} // env 개발 서버의 주소
        style={styles.webview}
        onNavigationStateChange={handleNavigationChange}
        onMessage={handleMessage}
      />
      {currentUrl === 'closet' && addClosetModal && (
        <ClosetAddModal closeFunc={addClosetModalBtn} />
      )}
      {editModal && <EditModal currentUrl={currentUrl} modalOn={modalOn} />}
      {shareModal && <ShareModal />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  webview: {
    flex: 1,
  },
});

export default Closet;
