import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../MyProfile/MyProfile.module.css";
// import useStore from "../../api/SessionStore";
import feed3 from "../../assets/image/feed3.jpg";

const DUMMY_PROFILE = {
  // profileImg: "https://picsum.photos/56/56",
  profileImg: feed3,
  userId: "USER_Id",
  nickName: "닉네임",
  description: "안녕하세요 잘부탁드립니다111안녕하세요 잘부탁드립니다222",
  instaId: "insta_id",
  post: 30,
  follower: 600,
  following: 300,
};

const MyProfile = () => {
  // const { userProfile } = useStore();
  const navigate = useNavigate();
  const editBtnClick = () => {
    navigate("/profileEdit");
  };
  const followFollowingBtn = () => {
    navigate("/profileFollow");
  };

  return (
    <div className={styles.myProfileWrapper}>
      <div className={styles.myProfileFrame}>
        <div className={styles.myProfileInfo}>
          <div className={styles.myProfileImgWrapper}>
            <img
              // src={userProfile.user_metadata?.avatar_url}
              src={DUMMY_PROFILE.profileImg}
              alt="profileImg"
              className={styles.myProfileImg}
            />
          </div>
          <div className={styles.myProfileInfoContents}>
            <div className={styles.myProfileInfoContent}>
              <p className={styles.myProfileInfoContentNum}>
                {DUMMY_PROFILE.post}
              </p>
              <p className={styles.myProfileInfoContentTitle}>게시물</p>
            </div>
            <div className={styles.myProfileInfoContent}>
              <p
                onClick={followFollowingBtn}
                className={styles.myProfileInfoContentNum}
              >
                {DUMMY_PROFILE.follower}
              </p>
              <p
                onClick={followFollowingBtn}
                className={styles.myProfileInfoContentTitle}
              >
                팔로워
              </p>
            </div>
            <div className={styles.myProfileInfoContent}>
              <p
                onClick={followFollowingBtn}
                className={styles.myProfileInfoContentNum}
              >
                {DUMMY_PROFILE.following}
              </p>
              <p
                onClick={followFollowingBtn}
                className={styles.myProfileInfoContentTitle}
              >
                팔로잉
              </p>
            </div>
          </div>
        </div>
        <div className={styles.myProfileContext}>
          <p className={styles.myProfileContextNickName}>
            {/* {userProfile.user_metadata.nickname} */}
            {DUMMY_PROFILE.nickName}
          </p>
          <p className={styles.myProfileContextDescription}>
            {/* {userProfile.user_metadata.description} */}
            {DUMMY_PROFILE.description}
          </p>
          <p className={styles.myProfileContextInstaId}>
            {/* {userProfile.user_metadata.instagram} */}
            {DUMMY_PROFILE.instaId}
          </p>
        </div>
      </div>
      <div onClick={editBtnClick} className={styles.myProfileEditBtn}>
        프로필 편집
      </div>
    </div>
  );
};

export default MyProfile;
