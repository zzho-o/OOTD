import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../Modals/ClosetAddModalstyle.js';

const closeIcon = require('../../assets/modalIcons/closeIcon.png');
const lockIcon = require('../../assets/modalIcons/lockIcon.png');
const unlockIcon = require('../../assets/modalIcons/unlockIcon.png');

const ClosetAddModal = ({closeFunc = null}) => {
  const [closetName, setClosetName] = useState('');
  const [openCloset, setOpenCloset] = useState(false);
  const closeClick = () => {
    closeFunc();
  };
  const openToggleClick = () => {
    setOpenCloset(!openCloset);
  };
  useEffect(() => {}, [openCloset, closetName]);
  return (
    <View style={styles.closetAddModal}>
      <TouchableOpacity
        onPress={closeClick}
        style={styles.closetAddModalCloseContent}>
        <Image source={closeIcon} style={styles.closetAddModalCloseIcon} />
      </TouchableOpacity>
      <View style={styles.closetAddModalContent}>
        <Text style={styles.closetAddModalContentTitle}>새 옷장 이름</Text>
        <TextInput
          style={styles.closetAddModalContentInput}
          placeholder="새 옷장의 이름을 입력해주세요"
          value={closetName}
          onChangeText={name => setClosetName(name)}
        />
        <View style={styles.closetAddModalContentOpenCheck}>
          <Text style={styles.closetAddModalContentOpenCheckText}>
            공개 여부
          </Text>
          <TouchableOpacity
            onPress={openToggleClick}
            style={styles.closetAddModalContentOpenCheckWrapper}>
            {!openCloset && (
              <Image
                source={lockIcon}
                style={styles.closetAddModalContentOpenCheckIcon}
              />
            )}
            {openCloset && (
              <>
                <View></View>
                <Image
                  source={unlockIcon}
                  style={styles.closetAddModalContentOpenCheckIcon}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={
          closetName === ''
            ? styles.closetAddModalButtonNull
            : styles.closetAddModalButton
        }>
        <Text
          style={
            closetName === ''
              ? styles.closetAddModalButtonTextNull
              : styles.closetAddModalButtonText
          }>
          옷장 등록
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClosetAddModal;
