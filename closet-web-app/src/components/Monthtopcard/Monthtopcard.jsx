import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Monthtopcard/Monthtopcard.module.css";

const Monthtopcard = ({ topNum, userId, instaId, img }) => {
  const navigate = useNavigate();

  const topCardClick = () => {
    navigate("/feed/detail");
  };
  const profileClick = () => {
    navigate("/profileUser");
  };
  return (
    <div className={styles.MonthTopCardWrapper}>
      <div className={styles.MonthTopCardImageDiv}>
        <img
          onClick={topCardClick}
          // src="https://picsum.photos/412/618"
          src={img}
          className={styles.MonthTopCardImage}
          alt="dummy"
        />
      </div>
      <div className={styles.MonthTopCardContent}>
        <div className={styles.MonthTopCardUserInform}>
          <p className={styles.MonthTopCardTopNum}>이달의 TOP {topNum}</p>
          <p onClick={profileClick} className={styles.MonthTopCardUserId}>
            {userId}
          </p>
          <p className={styles.MonthTopCardInstaId}>{instaId}</p>
        </div>
        <div className={styles.MonthTopCardProfile}>
          <div className={styles.MonthTopCardProfileImg}>
            <img
              onClick={profileClick}
              // src="https://picsum.photos/123/123"
              src={img}
              className={styles.MonthTopCardProfileImg}
              alt="dummy"
            />
          </div>
          <div className={styles.MonthTopCardProfileButton}>
            <p className={styles.MonthTopCardProfileButtonText}>팔로우</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monthtopcard;
