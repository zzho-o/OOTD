import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../Modals/EditModalstyle';

const editIcon = require('../../assets/modalIcons/editIcon.png');
const deleteIcon = require('../../assets/modalIcons/deleteIcon.png');
const shareIcon = require('../../assets/modalIcons/shareIcon.png');
const commentsIcon = require('../../assets/modalIcons/commentsIcon.png');

export const EditModal = ({currentUrl, modalOn}) => {
  const navigation = useNavigation();
  const clickEdit = () => {
    modalOn();
    if (currentUrl === 'clothesDetail') {
      navigation.navigate('clothesEdit');
    } else if (currentUrl === 'LookbookDetail') {
      navigation.navigate('lookbookEdit');
    } else if (currentUrl === 'detail') {
      navigation.navigate('feedEdit');
    }
  };
  const clickDelete = () => {
    modalOn();
    console.log('delete');
  };
  return (
    <View style={styles.editModalWrapper}>
      <View style={styles.editModalContent}>
        <TouchableOpacity onPress={clickEdit} style={styles.editModelItem}>
          <Image source={editIcon} style={styles.editModelItemIcon} />
          <Text style={styles.editModelItemText}>수정하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickDelete} style={styles.editModelItem}>
          <Image source={deleteIcon} style={styles.editModelItemIcon} />
          <Text style={styles.editModelItemText}>삭제하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ShareModal = () => {
  return (
    <View style={styles.editModalWrapper}>
      <View style={styles.editModalContent}>
        <TouchableOpacity style={styles.editModelItem}>
          <Image source={shareIcon} style={styles.editModelItemIcon} />
          <Text style={styles.editModelItemText}>링크로 공유하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
