import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  editModalWrapper: {
    width: '100%',
    margin: 0,
    padding: 0,
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
  editModalContent: {
    width: '100%',
    marginTop: 76,
    marginBottom: 4,
    marginLeft: 20,
    marginRight: 20,
    padding: 0,
    backgroundColor: '#ffffff',
  },

  editModelItem: {
    width: '100%',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 16,
    padding: 0,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
  },

  editModelItemIcon: {
    width: 24,
    height: 24,
    marginTop: 0,
    marginleft: 0,
    marginRight: 12,
    marginBottom: 0,
    padding: 0,
  },
  editModelItemText: {
    height: 24,
    fontSize: 16,
    // fontSize: 20,
    fontWeight: '600',
    margin: 0,
    padding: 0,
    color: '#333333',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default styles;
