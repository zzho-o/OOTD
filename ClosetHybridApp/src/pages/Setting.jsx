import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {REACT_APP_WEBVIEW_URL} from '@env';

const Setting = () => {
  const navigation = useNavigation();
  const navigationBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TopbarSub title={'설정'} func={navigationBack} />
      <WebView
        source={{uri: `${REACT_APP_WEBVIEW_URL}/setting`}}
        style={styles.webview}
      />
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

export default Setting;
