import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Topbar, TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {REACT_APP_WEBVIEW_URL} from '@env';
import {EditModal, ShareModal} from '../components/Modals/EditModal';
import {supabase} from '../supabase/supabaseClient';

const alarmIcon = require('../assets/topbar/Alarm_Icon.png');
const shareIcon = require('../assets/topbar/shareIcon.png');
const settingIcon = require('../assets/topbar/settingIcon.png');
const searchIcon = require('../assets/topbar/searchIcon.png');
const addIcon = require('../assets/topbar/addIcon.png');

const Profile = () => {
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [shareModal, setShareModal] = useState(false);
  const [userid, setUserId] = useState();

  const handleSession = async () => {
    const {
      data: {session},
      error,
    } = await supabase.auth.getSession();
    const ShowId = session.user.user_metadata.profile_id.replace('@', '');
    setUserId(ShowId);
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
  const feedAddBtn = () => {
    navigation.navigate('feedAdd');
  };
  const searchBtn = () => {
    navigation.navigate('search');
  };
  const shareOn = () => {
    setShareModal(!shareModal);
  };
  const alarmBtn = () => {
    navigation.navigate('alarm');
  };
  const settingBtn = () => {
    navigation.navigate('setting');
  };
  // handleSession();
  return (
    <View style={styles.container}>
      {currentUrl === 'profileMine' && (
        <Topbar
          // title={userid}
          title={'HongManjo'}
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
      {currentUrl === 'profileEdit' && (
        <TopbarSub title={'프로필 편집'} func={handleGoBack} />
      )}
      {currentUrl === 'profileFollow' && (
        <TopbarSub title={'프로필 id'} func={handleGoBack} />
      )}
      <WebView
        ref={webViewRef}
        source={{uri: `${REACT_APP_WEBVIEW_URL}/profileMine`}} // env 개발 서버의 주소
        style={styles.webview}
        onNavigationStateChange={handleNavigationChange}
      />
      {shareModal && <ShareModal />}
      {currentUrl === 'profileEdit' && (
        <View style={styles.editButtonWrapper}>
          <TouchableOpacity onPress={handleGoBack} style={styles.button}>
            <Text style={styles.buttonText}>프로필 수정 완료</Text>
          </TouchableOpacity>
        </View>
      )}
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
  editButtonWrapper: {
    margin: 0,
    paddingTop: 19,
    paddingBottom: 6,
    paddingLeft: 31,
    paddingRight: 30,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    width: 351,
    height: 56,
    margin: 0,
    padding: 0,
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
});

export default Profile;
