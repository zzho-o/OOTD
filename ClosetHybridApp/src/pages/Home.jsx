import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {Topbar, TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {REACT_APP_WEBVIEW_URL} from '@env';
import {EditModal, ShareModal} from '../components/Modals/EditModal';
import fetchSession from '../api/GetSession';

const alarmIcon = require('../assets/topbar/Alarm_Icon.png');
const searchIcon = require('../assets/topbar/searchIcon.png');
const addIcon = require('../assets/topbar/addIcon.png');
const shareIcon = require('../assets/topbar/shareIcon.png');
const settingIcon = require('../assets/topbar/settingIcon.png');
const moreIcon = require('../assets/topbar/moreIcon.png');

const Home = () => {
  console.log(REACT_APP_WEBVIEW_URL);
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [editModal, setEditModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
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
  const alarmBtn = () => {
    navigation.navigate('alarm');
  };
  const settingBtn = () => {
    navigation.navigate('setting');
  };
  const shareOn = () => {
    setShareModal(!shareModal);
  };
  const feedAddBtn = () => {
    navigation.navigate('feedAdd');
  };
  const searchBtn = () => {
    navigation.navigate('search');
  };
  return (
    <View style={styles.container}>
      {currentUrl === '' && (
        <Topbar
          title={'이달의 OOTD Top 10'}
          icon1={alarmIcon}
          icon1Func={alarmBtn}
        />
      )}
      {currentUrl === 'profileUser' && (
        <TopbarSub
          title={'@selenagomaz'}
          func={handleGoBack}
          icon1={alarmIcon}
          icon2={settingIcon}
          icon3={shareIcon}
          icon1Func={alarmBtn}
          icon2Func={settingBtn}
          icon3Func={shareOn}
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
      <WebView
        ref={webViewRef}
        source={{uri: `${REACT_APP_WEBVIEW_URL}`}} // env 개발 서버의 주소
        style={styles.webview}
        onNavigationStateChange={handleNavigationChange}
        onLoadEnd={() => fetchSession(webViewRef)}
      />
      {shareModal && <ShareModal />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Home;
