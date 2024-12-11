import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import styles from './Bottombarstyle.js';
import {useNavigation} from '@react-navigation/native';

// 아이콘 이미지 임포트
const HomeOff = require('../../assets/bottombar/Home_Icon.png');
const HomeOn = require('../../assets/bottombar/Home_Icon_On.png');
const FeedOff = require('../../assets/bottombar/Tag_Icon.png');
const FeedOn = require('../../assets/bottombar/Tag_Icon_On.png');
const ClosetOff = require('../../assets/bottombar/Closet_Icon.png');
const ClosetOn = require('../../assets/bottombar/Closet_Icon_On.png');
const ProfileOff = require('../../assets/bottombar/Person_pin_Icon.png');
const ProfileOn = require('../../assets/bottombar/Person_pin_Icon_On.png');

const Bottombar = ({state, descriptors, insets}) => {
  const navigation = useNavigation();
  const tab1Value = useRef(new Animated.Value(0)).current;
  const tab2Value = useRef(new Animated.Value(0)).current;
  const tab3Value = useRef(new Animated.Value(0)).current;
  const tab4Value = useRef(new Animated.Value(0)).current;

  const [activeTab, setActiveTab] = useState('Home');

  const scaleAnimated = (value, animatedValue) =>
    Animated.timing(animatedValue, {
      useNativeDriver: true,
      toValue: value,
      duration: 150,
    });

  const animatedValues = {
    0: tab1Value,
    1: tab2Value,
    2: tab3Value,
    3: tab4Value,
  };

  const iconFlag = (label, isFocused) => {
    switch (label) {
      case 'Home':
        return isFocused ? HomeOn : HomeOff;
      case 'Feed':
        return isFocused ? FeedOn : FeedOff;
      case 'Closet':
        return isFocused ? ClosetOn : ClosetOff;
      case 'Profile':
        return isFocused ? ProfileOn : ProfileOff;
      default:
        return HomeOff;
    }
  };

  const handlePress = (route, index) => {
    if (state.index !== index) {
      setActiveTab(route.name);
      navigation.navigate(route.name);
    }

    const animatedOf = animatedValues[index];
    scaleAnimated(1, animatedOf).start(({finished}) => {
      if (finished) {
        scaleAnimated(0, animatedOf).start();
      }
    });
  };

  return (
    <View style={[styles.bottombarWrapper, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label = route.name;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(route, index)}
            style={
              isFocused ? styles.bottombarButtonOn : styles.bottombarButton
            }>
            <View style={styles.bottombarButtonContent}>
              <Animated.Image
                source={iconFlag(label, isFocused)}
                resizeMode="contain"
                style={[
                  styles.bottombarIcon,
                  {
                    transform: [
                      {
                        scale: animatedValues[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        }),
                      },
                    ],
                  },
                ]}
              />
              <Text
                style={
                  isFocused ? styles.bottombarTitleOn : styles.bottombarTitle
                }>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Bottombar;
