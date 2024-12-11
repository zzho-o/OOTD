import React from "react";
import styles from "../UserProfile/UserProfile.module.css";
import feed3 from "../../assets/image/feed3.jpg";

const DUMMY_PROFILE = {
  // profileImg: "https://picsum.photos/56/56",
  profileImg: feed3,
  userId: "@selenagomaz",
  nickName: "닉네임",
  description: "안녕하세요 잘부탁드립니다111안녕하세요 잘부탁드립니다222",
  instaId: "insta_id",
  post: 30,
  follower: 600,
  following: 300,
  follow: true,
};

const MyProfile = () => {
  const editBtnClick = () => {
    console.log("editBtn click");
  };

  return (
    <div className={styles.myProfileWrapper}>
      <div className={styles.myProfileFrame}>
        <div className={styles.myProfileInfo}>
          <div className={styles.myProfileImgWrapper}>
            <img
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
              <p className={styles.myProfileInfoContentNum}>
                {DUMMY_PROFILE.follower}
              </p>
              <p className={styles.myProfileInfoContentTitle}>팔로워</p>
            </div>
            <div className={styles.myProfileInfoContent}>
              <p className={styles.myProfileInfoContentNum}>
                {DUMMY_PROFILE.following}
              </p>
              <p className={styles.myProfileInfoContentTitle}>팔로잉</p>
            </div>
          </div>
        </div>
        <div className={styles.myProfileContext}>
          <p className={styles.myProfileContextNickName}>
            {DUMMY_PROFILE.nickName}
          </p>
          <p className={styles.myProfileContextDescription}>
            {DUMMY_PROFILE.description}
          </p>
          <p className={styles.myProfileContextInstaId}>
            {DUMMY_PROFILE.instaId}
          </p>
        </div>
      </div>
      {DUMMY_PROFILE.follow ? (
        <div onClick={editBtnClick} className={styles.UserFollowBtn}>
          팔로잉
        </div>
      ) : (
        <div onClick={editBtnClick} className={styles.UserUnFollowBtn}>
          팔로우
        </div>
      )}
    </div>
  );
};

export default MyProfile;
