import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Profile/ProfileEdit.module.css";
import profileIcon from "../../assets/icons/Profile/profileIcon.png";
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

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(profileIcon);
  const [nickName, setNickName] = useState("");
  const [description, setDescription] = useState("");
  const [instaId, setInstaId] = useState("");

  const editBtnClick = () => {
    navigate("/profileMine");
  };

  useEffect(() => {
    setProfileImg(DUMMY_PROFILE.profileImg);
    setNickName(DUMMY_PROFILE.nickName);
    setDescription(DUMMY_PROFILE.description);
    setInstaId(DUMMY_PROFILE.instaId);
  }, []);

  return (
    <div className={styles.ProfileEditWrapper}>
      <div className={styles.ProfileEditForm}>
        <div className={styles.ProfileEditFormProfile}>
          <div className={styles.ProfileEditFormProfileImg}>
            <img
              src={profileImg}
              alt="profileImg"
              className={styles.ProfileEditFormProfileImg}
            />
          </div>
          <div className={styles.ProfileEditFormProfileText}>프로필 선택</div>
        </div>
        <div className={styles.ProfileEditFormPlusInform}>
          <div className={styles.ProfileEditFormPlusInformTextBox}>
            <p className={styles.ProfileEditFormPlusInformTextBoxTitle}>
              닉네임
            </p>
            <input
              type="text"
              value={nickName}
              onChange={e => setNickName(e.value)}
              className={styles.ProfileEditFormPlusInformTextBoxInput}
            />
          </div>
          <div className={styles.ProfileEditFormPlusInformTextBoxTextareaBox}>
            <p className={styles.ProfileEditFormPlusInformTextBoxTitle}>소개</p>
            <textarea
              type="text"
              value={description}
              onChange={e => setDescription(e.value)}
              className={styles.ProfileEditFormPlusInformTextBoxTextarea}
            />
          </div>
          <div className={styles.ProfileEditFormPlusInformTextBox}>
            <p className={styles.ProfileEditFormPlusInformTextBoxTitle}>
              인스타 아이디
            </p>
            <input
              type="text"
              value={instaId}
              onChange={e => setInstaId(e.value)}
              className={styles.ProfileEditFormPlusInformTextBoxInput}
            />
          </div>
        </div>
      </div>
      {/* <div onClick={editBtnClick} className={styles.ProfileEditBtn}>
        프로필 수정 완료
      </div> */}
    </div>
  );
};

export default ProfileEdit;
