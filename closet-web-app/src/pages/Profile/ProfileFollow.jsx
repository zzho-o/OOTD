import React, { useState, useEffect } from "react";
import styles from "../Profile/ProfileFollow.module.css";
import { Tabbar } from "../../components/Tabbar/Tabbar";

const tabNames = [
  { title: "팔로워", content: "follower" },
  { title: "팔로잉", content: "following" },
];

const DUMMY_FOLLOWER = [
  { profileImg: "https://picsum.photos/35/35", userID: "user_id_aaaaa" },
  { profileImg: "https://picsum.photos/35/35", userID: "user_id_bbbbb" },
  { profileImg: "https://picsum.photos/35/35", userID: "user_id_ccccc" },
  { profileImg: "https://picsum.photos/35/35", userID: "user_id_ddddd" },
  { profileImg: "https://picsum.photos/35/35", userID: "user_id_eeeee" },
  { profileImg: "https://picsum.photos/35/35", userID: "user_id_fffff" },
];

const DUMMY_FOLLOWING = [
  {
    profileImg: "https://picsum.photos/35/35",
    userID: "user_id_aaaaa",
    following: true,
  },
  {
    profileImg: "https://picsum.photos/35/35",
    userID: "user_id_bbbbb",
    following: true,
  },
  {
    profileImg: "https://picsum.photos/35/35",
    userID: "user_id_ccccc",
    following: true,
  },
  {
    profileImg: "https://picsum.photos/35/35",
    userID: "user_id_ddddd",
    following: true,
  },
  {
    profileImg: "https://picsum.photos/35/35",
    userID: "user_id_eeeee",
    following: true,
  },
  {
    profileImg: "https://picsum.photos/35/35",
    userID: "user_id_fffff",
    following: true,
  },
];

const ProfileFollow = () => {
  const [content, setContent] = useState("follower");
  const [followingData, setFollowingData] = useState(DUMMY_FOLLOWING);
  const deleteBtnClick = () => {
    console.log("follower Delete");
  };
  const followingBtnClick = index => {
    const newFollowingData = [...followingData];
    newFollowingData[index].following = !newFollowingData[index].following;
    setFollowingData(newFollowingData);
  };

  useEffect(() => {}, [content, followingData]);

  return (
    <div className={styles.ProfileFollowWrapper}>
      <Tabbar tabNames={tabNames} setContent={setContent} />
      <div className={styles.ProfileFollowContent}>
        {content === "follower"
          ? DUMMY_FOLLOWER.map((item, index) => (
              <div className={styles.ProfileFollowContentList}>
                <div className={styles.ProfileFollowContentListUser}>
                  <img
                    src={item.profileImg}
                    alt="profileImg"
                    className={styles.ProfileFollowContentListUserImg}
                  />
                  <p>{item.userID}</p>
                </div>
                <div
                  key={index}
                  onClick={deleteBtnClick}
                  className={styles.ProfileFollowContentListBtn}
                >
                  삭제
                </div>
              </div>
            ))
          : DUMMY_FOLLOWING.map((item, index) => (
              <div className={styles.ProfileFollowContentList}>
                <div className={styles.ProfileFollowContentListUser}>
                  <img
                    src={item.profileImg}
                    alt="profileImg"
                    className={styles.ProfileFollowContentListUserImg}
                  />
                  <p>{item.userID}</p>
                </div>
                <div
                  key={index}
                  onClick={() => followingBtnClick(index)}
                  className={
                    item.following
                      ? styles.ProfileFollowContentListBtn
                      : styles.ProfileFollowContentListBtnUnFollow
                  }
                >
                  {item.following ? "팔로잉" : "팔로우"}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProfileFollow;
