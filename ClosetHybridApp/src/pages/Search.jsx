import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TopbarSubSearch} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {REACT_APP_WEBVIEW_URL} from '@env';

const Search = () => {
  const navigation = useNavigation();
  const navigationBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TopbarSubSearch func={navigationBack} />
      <WebView
        source={{uri: `${REACT_APP_WEBVIEW_URL}/search`}}
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

export default Search;
