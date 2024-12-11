import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './CommentModalstyle';

const closeIcon = require('../../assets/modalIcons/closeIcon.png');
const favoriteIcon = require('../../assets/modalIcons/favoriteIcon.png');
const unfavoriteIcon = require('../../assets/modalIcons/unfavoriteIcon.png');

const DUMMY_COMMENT = [
  {
    userId: 'user_id_aaaa',
    profile: 'https://picsum.photos/35/35',
    comment: '옷이 정말 멋지세요~~',
    heart: true,
  },
  {
    userId: 'userbbb',
    profile: 'https://picsum.photos/35/35',
    comment:
      '옷이 정말 멋지세요~~옷이 정말 멋지세요~~옷이 정말 멋지세요~~옷이 정말 멋지세요~~',
    heart: false,
  },
  {
    userId: 'cccuserCo',
    profile: 'https://picsum.photos/35/35',
    comment: '옷이 정말 멋지세요~~',
    heart: true,
  },
  {
    userId: 'Commenter',
    profile: 'https://picsum.photos/35/35',
    comment: '옷이 정말 멋지세요~~옷이 정말 멋지세요~~옷이 정말 멋지세요~~',
    heart: true,
  },
];

const CommentModal = ({commentOn}) => {
  const closeClick = () => {
    console.log('close');
    commentOn();
  };
  const profileClick = () => {
    console.log('profile');
    // commentOn();
  };
  return (
    <View style={styles.commentModalWrapper}>
      <View style={styles.commentModalTitle}>
        <TouchableOpacity
          onPress={closeClick}
          style={styles.commentModalTitleCloseContent}>
          <Image source={closeIcon} style={styles.commentModalTitleCloseIcon} />
          <Text style={styles.commentModalTitleText}>댓글</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentModalContent}>
        {DUMMY_COMMENT.map((item, index) => (
          <View key={index} style={styles.commentModalCommentItem}>
            <View style={styles.commentModalCommentItemFirst}>
              <TouchableOpacity
                onPress={profileClick}
                style={styles.commentModalCommentItemFirstProfile}>
                <Image
                  source={{uri: item.profile}}
                  style={styles.commentModalCommentItemFirstProfileImg}
                />
              </TouchableOpacity>
              <View style={styles.commentModalCommentItemFirstCommentContent}>
                <TouchableOpacity
                  onPress={profileClick}
                  style={styles.commentModalCommentItemFirstCommentUserId}>
                  <Text
                    style={styles.commentModalCommentItemFirstCommentUserId}>
                    {item.userId}
                  </Text>
                </TouchableOpacity>
                <View
                  style={styles.commentModalCommentItemFirstCommentUserComment}>
                  <Text
                    style={
                      styles.commentModalCommentItemFirstCommentUserComment
                    }>
                    {item.comment}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.commentModalCommentItemHeartIcon}>
              {item.heart ? (
                <Image
                  source={favoriteIcon}
                  style={styles.commentModalCommentItemHeartIcon}
                />
              ) : (
                <Image
                  source={unfavoriteIcon}
                  style={styles.commentModalCommentItemHeartIcon}
                />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.commentTextInputWrapper}>
        <TextInput
          style={styles.commentTextInput}
          placeholder="댓글을 입력해주세요"
        />
      </View>
    </View>
  );
};

export default CommentModal;
