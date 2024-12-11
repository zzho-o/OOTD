import {StyleSheet} from 'react-native';

const Loginstyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1, // ScrollView 내부 콘텐츠가 화면을 넘칠 때 스크롤 가능하게 설정
    paddingHorizontal: 28,
  },
  Main: {gap: 16},
  GoogleLogin: {
    height: 58,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(204, 204, 204, 1)',
    flexDirection: 'row',
    gap: 10,
  },
  KakaoLogin: {
    backgroundColor: 'rgba(255, 255, 51, 1)',
    height: 58,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(204, 204, 204, 1)',
    flexDirection: 'row',
    gap: 10,
  },
  LoginFont: {
    fontSize: 16,
    color: 'rgba(51, 51, 51, 1)',
  },
  LoginInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(204, 204, 204, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  FindOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LoginBtn: {
    backgroundColor: 'rgba(255, 190, 152, 1)',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 16,
    marginBottom: 14,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  checkbox: {
    color: 'black',
  },
});

export default Loginstyles;
