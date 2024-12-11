import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TopbarSub} from '../components/Topbar/Topbar';
import {WebView} from 'react-native-webview';
import {REACT_APP_WEBVIEW_URL} from '@env';

const LookbookAdd = () => {
  console.log(REACT_APP_WEBVIEW_URL);
  const navigation = useNavigation();
  const [currentUrl, setCurrentUrl] = useState('');
  const handleNavigationChange = navState => {
    const index = navState.url.lastIndexOf('/');
    const result = navState.url.slice(index + 1);
    setCurrentUrl(result);
  };
  const navigationGoBack = () => {
    navigation.goBack();
  };
  const addBtnClick = () => {
    navigation.navigate('Closet');
  };
  return (
    <View style={styles.container}>
      {currentUrl === 'LookbookAdd' && (
        <TopbarSub title={'룩북 등록'} func={navigationGoBack} />
      )}
      <WebView
        source={{uri: `${REACT_APP_WEBVIEW_URL}/LookbookAdd`}}
        style={styles.webview}
        onNavigationStateChange={handleNavigationChange}
      />
      {currentUrl === 'LookbookAdd' && (
        <View style={styles.addButtonWrapper}>
          <TouchableOpacity onPress={addBtnClick} style={styles.button}>
            <Text style={styles.buttonText}>선택한 옷 추가</Text>
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
  addButtonWrapper: {
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

export default LookbookAdd;
