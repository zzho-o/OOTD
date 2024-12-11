import {StyleSheet} from 'react-native';

const SignUpstyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  Header: {
    backgroundColor: 'gray',
    height: 52,
  },
  Main: {
    marginHorizontal: 28,
    gap: 20,
  },
  profileSection: {
    marginVertical: 25,
    alignItems: 'center',
    gap: 10,
  },
  profileImg: {
    width: 123,
    height: 123,
    borderRadius: 100,
  },
  thickFont: {
    fontSize: 20,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '700',
  },
  inputform: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(204, 204, 204, 1)',
    flex: 1,
    padding: 2,
  },
  inputsty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputpw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(204, 204, 204, 1)',
  },
  gender: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(204, 204, 204, 1)',
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  warningsty: {
    flexDirection: 'row',
    width: 225,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 236, 225, 1)',
  },
  SignUpfalse: {
    backgroundColor: 'rgba(204, 204, 204, 1)',
    marginHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 48,
    marginVertical: 14,
  },
  SignUpBtn: {
    backgroundColor: 'rgba(255, 236, 225, 1)',
    marginHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 48,
    marginVertical: 14,
  },
  SignUpText: {
    fontSize: 20,
    color: 'rgba(255, 190, 152, 1)',
  },
  SignUpfalseText: {
    fontSize: 20,
    color: 'white',
  },
});

export default SignUpstyles;
