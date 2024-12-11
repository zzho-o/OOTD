import React, { useState, useEffect } from "react";
import styles from "../AlarmPage/Alarm.module.css";
import closeIcon from "../../assets/icons/OOTDcard/Close_Icon.png";

const DUMMY_ALARM = [
  {
    user: "User_id_aaaaa",
    content: "heart",
    profileImg: "https://picsum.photos/56/56",
  },
  {
    user: "User_id_aaaaa",
    content: "heart",
    profileImg: "https://picsum.photos/56/56",
  },
  {
    user: "User_id_aaaaa",
    content: "heart",
    profileImg: "https://picsum.photos/56/56",
  },
  {
    user: "User_id_aaaaa",
    content: "heart",
    profileImg: "https://picsum.photos/56/56",
  },
  {
    user: "User_id_bbbbb",
    content: "comment",
    profileImg: "https://picsum.photos/56/56",
  },
  {
    user: "User_id_bbbbb",
    content: "comment",
    profileImg: "https://picsum.photos/56/56",
  },
  {
    user: "User_id_bbbbb",
    content: "heart",
    profileImg: "https://picsum.photos/56/56",
  },
];

const Alarm = () => {
  const [alarmData, setAlarmData] = useState([...DUMMY_ALARM]);

  const deleteClick = (deleteIndex) => {
    const filterData = alarmData.filter((item, index) => index !== deleteIndex);
    setAlarmData([...filterData]);
  };
  const allDelete = () => {
    setAlarmData([]);
  };

  useEffect(() => {}, [alarmData]);
  return (
    <div className={styles.AlarmWrapper}>
      <div className={styles.AlarmContents}>
        <p onClick={allDelete} className={styles.AlarmAllDelete}>
          전체 삭제
        </p>
        <div className={styles.AlarmList}>
          {alarmData.map((item, index) => (
            <div className={styles.AlarmItem}>
              <img
                src={item.profileImg}
                alt="profileImg"
                className={styles.AlarmItemProfile}
              />
              {item.content === "heart" ? (
                <p className={styles.AlarmItemText}>
                  {item.user} 님이 회원님의 게시물을 좋아합니다.
                </p>
              ) : (
                <p className={styles.AlarmItemText}>
                  {item.user} 님이 회원님의 게시물에 댓글을 남겼습니다.
                </p>
              )}
              <img
                onClick={() => deleteClick(index)}
                src={closeIcon}
                alt="closeIcon"
                className={styles.AlarmItemCloseIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alarm;
