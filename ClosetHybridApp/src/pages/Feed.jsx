import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {Topbar, TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {REACT_APP_WEBVIEW_URL} from '@env';
import {EditModal, ShareModal} from '../components/Modals/EditModal';
import CommentModal from '../components/Modals/CommentModal';

const alarmIcon = require('../assets/topbar/Alarm_Icon.png');
const searchIcon = require('../assets/topbar/searchIcon.png');
const addIcon = require('../assets/topbar/addIcon.png');
const shareIcon = require('../assets/topbar/shareIcon.png');
const settingIcon = require('../assets/topbar/settingIcon.png');
const moreIcon = require('../assets/topbar/moreIcon.png');

const Feed = () => {
  console.log(REACT_APP_WEBVIEW_URL);
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [editModal, setEditModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
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
  const handleMessage = event => {
    const message = event.nativeEvent.data;
    if (message === 'moreIcon') {
      setEditModal(!editModal);
    } else if (message === 'comment') {
      setCommentModal(!commentModal);
    } else if (message === 'shareIcon') {
      setShareModal(!shareModal);
    }
  };
  const alarmBtn = () => {
    navigation.navigate('alarm');
  };
  const settingBtn = () => {
    navigation.navigate('setting');
  };
  const searchBtn = () => {
    navigation.navigate('search');
  };
  const modalOn = () => {
    setEditModal(!editModal);
  };
  const shareOn = () => {
    setShareModal(!shareModal);
  };
  const commentOn = () => {
    setCommentModal(!commentModal);
  };
  const feedAddBtn = () => {
    navigation.navigate('feedAdd');
  };
  return (
    <View style={styles.container}>
      {currentUrl === 'feed' && (
        <Topbar
          title={'OOTD'}
          icon1={alarmIcon}
          icon2={searchIcon}
          icon3={addIcon}
          icon1Func={alarmBtn}
          icon2Func={searchBtn}
          icon3Func={feedAddBtn}
        />
      )}
      {currentUrl === 'detail' && (
        <TopbarSub
          title={'OOTD'}
          func={handleGoBack}
          icon1={searchIcon}
          icon2={addIcon}
          icon1Func={searchBtn}
          icon2Func={feedAddBtn}
        />
      )}
      {currentUrl === 'profileUser' && (
        <TopbarSub
          title={'UserId'}
          func={handleGoBack}
          icon1={alarmIcon}
          icon2={settingIcon}
          icon3={shareIcon}
          icon1Func={alarmBtn}
          icon2Func={settingBtn}
          icon3Func={shareOn}
        />
      )}
      {currentUrl === 'edit' && (
        <TopbarSub title={'OOTD 수정'} func={handleGoBack} />
      )}
      {currentUrl === 'add' && (
        <TopbarSub title={'OOTD 등록'} func={handleGoBack} />
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
      <WebView
        ref={webViewRef}
        source={{uri: `${REACT_APP_WEBVIEW_URL}/feed`}} // env 개발 서버의 주소
        style={styles.webview}
        onNavigationStateChange={handleNavigationChange}
        onMessage={handleMessage}
      />
      {editModal && <EditModal currentUrl={currentUrl} modalOn={modalOn} />}
      {shareModal && <ShareModal />}
      {commentModal && <CommentModal commentOn={commentOn} />}
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

export default Feed;
