import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottombarWrapper: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  bottombarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottombarButtonOn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  bottombarButtonContent: {
    alignItems: 'center',
  },
  bottombarIcon: {
    width: 30,
    height: 30,
    margin: 0,
  },
  bottombarTitle: {
    fontSize: 8,
    textAlign: 'center',
    margin: 0,
  },
  bottombarTitleOn: {
    fontSize: 8,
    textAlign: 'center',
    margin: 0,
    color: '#FFFFFF',
  },
});

export default styles;
