import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  closetAddModal: {
    width: '100%',
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

  closetAddModalCloseContent: {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },

  closetAddModalCloseIcon: {
    width: 12,
    height: 12,
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
  },

  closetAddModalContent: {
    width: '100%',
    marginVertical: 20,
    marginHorizontal: 0,
    padding: 0,
    backgroundColor: '#ffffff',
  },

  closetAddModalContentTitle: {
    width: '100%',
    height: 24,
    margin: 0,
    padding: 0,
    // fontSize: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },

  closetAddModalContentInput: {
    width: '100%',
    height: 50,
    marginVertical: 16,
    marginHorizontal: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    fontSize: 16,
    color: '#333333',
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 0,
  },

  closetAddModalContentOpenCheck: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },

  closetAddModalContentOpenCheckText: {
    height: 24,
    margin: 0,
    padding: 0,
    // fontSize: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },

  closetAddModalContentOpenCheckWrapper: {
    width: 60,
    height: 30,
    margin: 0,
    padding: 0,
    backgroundColor: 'rgba(255, 190, 152, 0.3)',
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  closetAddModalContentOpenCheckIcon: {
    width: 28,
    height: 28,
    margin: 0,
    padding: 0,
  },

  closetAddModalButton: {
    width: '100%',
    height: 56,
    margin: 0,
    paddingVertical: 16,
    paddingHorizontal: 0,
    backgroundColor: '#ffbe98',
    borderRadius: 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closetAddModalButtonNull: {
    width: '100%',
    height: 56,
    margin: 0,
    paddingVertical: 16,
    paddingHorizontal: 0,
    backgroundColor: 'rgba(255, 190, 152, 0.3)',
    borderRadius: 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closetAddModalButtonText: {
    color: '#ffffff',
    height: 24,
    // fontSize: 20,
    fontSize: 18,
    fontWeight: '600',
  },

  closetAddModalButtonTextNull: {
    color: '#ffbe98',
    height: 24,
    // fontSize: 20,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
