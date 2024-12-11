import React from "react";
import styles from "../SettingPage/Setting.module.css";
import lockIcon from "../../assets/icons/SettingIcon/lockIcon.png";
import alarmIcon from "../../assets/icons/SettingIcon/Alarm_Icon.png";
import paintIcon from "../../assets/icons/SettingIcon/paintIcon.png";
import personIcon from "../../assets/icons/SettingIcon/personIcon.png";
import phoneIcon from "../../assets/icons/SettingIcon/phoneIcon.png";
import campaignIcon from "../../assets/icons/SettingIcon/campaignIcon.png";
import infoIcon from "../../assets/icons/SettingIcon/infoIcon.png";

const SETTING_LIST = [
  { icon: lockIcon, title: "개인/보안" },
  { icon: alarmIcon, title: "알림" },
  { icon: paintIcon, title: "테마" },
  { icon: personIcon, title: "팔로우/팔로워" },
  { icon: phoneIcon, title: "화면" },
];
const INFO_LIST = [
  { icon: campaignIcon, title: "공지사항" },
  { icon: infoIcon, title: "앱 정보" },
];

const Setting = () => {
  return (
    <div className={styles.SettingWrapper}>
      <div className={styles.SettingContents}>
        {SETTING_LIST.map((item, index) => (
          <div className={styles.SettingContent}>
            <img
              src={item.icon}
              alt="SettingIcon"
              className={styles.SettingIcon}
            />
            <p className={styles.SettingTitle}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.SettingContents}>
        {INFO_LIST.map((item, index) => (
          <div className={styles.SettingContent}>
            <img
              src={item.icon}
              alt="SettingIcon"
              className={styles.SettingIcon}
            />
            <p className={styles.SettingTitle}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Setting;
