import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Topbar/Topbarstyle.js';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../supabase/supabaseClient.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ArrowBackIcon = require('../../assets/topbar/Arrow_back_Icon.png');
const SearchIcon = require('../../assets/topbar/Search_Icon.png');

const alarmClick = () => {
  console.log('alarmClick!!!');
};

const arrowClick = () => {
  console.log('backIconClick');
};

const handleLogout = async navigation => {
  const {error} = await supabase.auth.signOut();

  if (error) {
    console.log('Logout error:', error.message);
  } else {
    // 로그아웃 성공 시, rememberMe 상태를 제거합니다.
    await AsyncStorage.removeItem('rememberMe');

    // 로그아웃 후, 로그인 화면으로 이동합니다.
    navigation.navigate('Login');
  }
};

export const Topbar = ({
  title,
  icon1 = null,
  icon2 = null,
  icon3 = null,
  icon1Func = null,
  icon2Func = null,
  icon3Func = null,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topbarWrapper}>
      <Text style={styles.topbarTitle}>{title}</Text>
      <View style={styles.topbarIcons}>
        {icon3 && (
          <TouchableOpacity onPress={() => icon3Func()}>
            <Image source={icon3} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
        {icon2 && (
          <TouchableOpacity onPress={() => icon2Func()}>
            <Image source={icon2} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
        {icon1 && (
          <TouchableOpacity onPress={() => icon1Func()}>
            <Image source={icon1} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const TopbarOpacity = ({
  title,
  icon1 = null,
  icon2 = null,
  icon3 = null,
  icon1Func = null,
  icon2Func = null,
  icon3Func = null,
}) => {
  return (
    <View style={styles.topbarWrapperOpacity}>
      <Text style={styles.topbarTitle}>{title}</Text>
      <View style={styles.topbarIcons}>
        {icon3 && (
          <TouchableOpacity onPress={() => icon3Func()}>
            <Image source={icon3} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
        {icon2 && (
          <TouchableOpacity onPress={() => icon2Func()}>
            <Image source={icon2} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
        {icon1 && (
          <TouchableOpacity onPress={() => icon1Func()}>
            <Image source={icon1} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const TopbarSub = ({
  title,
  func,
  icon1 = null,
  icon2 = null,
  icon3 = null,
  icon1Func = null,
  icon2Func = null,
  icon3Func = null,
}) => {
  const arrowClick = () => {
    func();
  };
  return (
    <View style={styles.topbarWrapper}>
      <TouchableOpacity onPress={arrowClick}>
        <Image source={ArrowBackIcon} style={styles.topbarIcon} />
      </TouchableOpacity>
      <Text style={styles.topbarTitle}>{title}</Text>
      <View style={styles.topbarIcons}>
        {icon3 && (
          <TouchableOpacity onPress={() => icon3Func()}>
            <Image source={icon3} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
        {icon2 && (
          <TouchableOpacity onPress={() => icon2Func()}>
            <Image source={icon2} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
        {icon1 && (
          <TouchableOpacity onPress={() => icon1Func()}>
            <Image source={icon1} style={styles.topbarIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const TopbarSubSearch = func => {
  const arrowClick = () => {
    func();
  };
  return (
    <View style={styles.topbarSubSearchWrapper}>
      <TouchableOpacity onPress={arrowClick}>
        <Image source={ArrowBackIcon} style={styles.topbarIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.topbarSubDivSearchWraaper}>
        <Text style={styles.topbarSerachPlaceholder}>
          검색어를 입력해주세요
        </Text>
        <Image source={SearchIcon} style={styles.topbarIcon} />
      </TouchableOpacity>
    </View>
  );
};
