import {StyleSheet} from 'react-native';

export const Termsstyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1, // ScrollView 내부 콘텐츠가 화면을 넘칠 때 스크롤 가능하게 설정
  },
  Header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // 상단에 위치하도록 설정
  },
  Main: {
    margin: 28,
    gap: 28,
  },
  line: {
    height: 1,
    backgroundColor: '#000',
  },
  thickFont: {
    fontSize: 20,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '700',
  },
  slimFontfalse: {
    color: 'rgba(140, 140, 140, 1)',
    fontSize: 16,
  },
  slimFont: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 16,
  },
  SignUpBtn: {
    backgroundColor: 'rgba(255, 190, 152, 1)',
    marginHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 48,
    marginBottom: 14,
  },
  SignUpfalse: {
    backgroundColor: 'rgba(204, 204, 204, 1)',
    marginHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 48,
    marginBottom: 14,
  },
  SignUpText: {
    fontSize: 20,
    color: 'white',
  },
  topbarWrapper: {
    width: '100%',
    position: 'absolute', // 상단에 고정
    top: 0,
    left: 0,
    zIndex: 10, // 스크롤 시 상단에 고정되도록 설정
    backgroundColor: 'white', // 배경 색상 조정
  },
  scrollContentContainer: {
    marginTop: 52, // Topbar의 높이만큼 margin 추가
    paddingHorizontal: 28,
    flexGrow: 1,
  },
});
