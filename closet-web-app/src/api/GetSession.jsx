import { useEffect } from "react";
import useStore from "./SessionStore";

const useUserProfile = () => {
  const { setUserProfile } = useStore();

  useEffect(() => {
    const handleMessage = e => {
      console.log("메시지 수신: ", e.data);
      try {
        const userData = JSON.parse(e.data);
        console.log("새로운 사용자 프로필 데이터: ", userData);
        setUserProfile(userData); // Zustand 스토어에 사용자 프로필 저장
        console.log("사용자 프로필 설정 완료");
      } catch (error) {
        console.error("프로필 데이터 처리 오류:", error);
      }
    };

    document.addEventListener("message", handleMessage);

    return () => {
      document.removeEventListener("message", handleMessage);
    };
  }, [setUserProfile]);

  return {};
};

export default useUserProfile;
