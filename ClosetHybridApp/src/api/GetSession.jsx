import {supabase} from '../supabase/supabaseClient';

let cachedSession = null; // 세션 캐싱

const fetchSession = async webViewRef => {
  if (cachedSession) {
    webViewRef.current.postMessage(JSON.stringify(cachedSession.user));
    return;
  }

  const {
    data: {session},
    error,
  } = await supabase.auth.getSession();

  if (!error && session) {
    cachedSession = session;
    webViewRef.current.postMessage(JSON.stringify(session.user));
  } else {
    console.log('세션을 가져오는 중 오류 발생: ', error); // 추가 - 문제 확인 차 콘솔 로그 추가
  }
};

export default fetchSession;
