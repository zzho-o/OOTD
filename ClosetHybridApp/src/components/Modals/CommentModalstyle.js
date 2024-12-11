import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  commentModalWrapper: {
    width: '100%',
    height: 356,
    margin: 0,
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#cccccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 1000,
  },

  commentModalTitle: {
    width: '100%',
    height: 36,
    marginTop: 0,
    marginBottom: 20,
    marginHorizontal: 0,
    padding: 0,
  },

  commentModalTitleCloseContent: {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },

  commentModalTitleCloseIcon: {
    width: 12,
    height: 12,
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
  },

  commentModalTitleText: {
    width: '100%',
    height: 24,
    margin: 0,
    padding: 0,
    // fontSize: 20,
    fontSize: 17,
    fontWeight: '600',
    color: '#333333',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  commentModalContent: {
    width: '100%',
    margin: 0,
    padding: 0,
  },

  commentModalCommentItem: {
    width: '100%',
    height: 51,
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  commentModalCommentItemFirst: {
    height: 35,
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  commentModalCommentItemFirstProfile: {
    width: 35,
    height: 35,
    marginVertical: 0,
    marginLeft: 0,
    marginRight: 8,
    padding: 0,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  commentModalCommentItemFirstProfileImg: {
    width: 35,
    height: 35,
    margin: 0,
    padding: 0,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  commentModalCommentItemFirstCommentContent: {
    height: 35,
    margin: 0,
    padding: 0,
  },

  commentModalCommentItemFirstCommentUserId: {
    height: 14,
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 4,
    padding: 0,
    fontSize: 12,
    fontWeight: '700',
    color: '#333333',
  },

  commentModalCommentItemFirstCommentUserComment: {
    width: 271,
    // height: 14,
    margin: 0,
    padding: 0,
    // fontSize: 12,
    fontSize: 10,
    color: '#333333',
  },

  commentModalCommentItemHeartIcon: {
    width: 24,
    height: 24,
    margin: 0,
    padding: 0,
  },

  commentTextInputWrapper: {
    width: '100%',
    marginVertical: 20,
    marginHorizontal: 0,
    padding: 0,
  },

  commentTextInput: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
