import React from "react";
import styles from "../Topbar/Topbar.module.css";
import ArrowBackIcon from "../../assets/icons/topbarIcons/Arrow_back_Icon.png";

const alarmClick = () => {
  alert("alarmClick!!!");
};

const arrowClick = () => {
  alert("backIconClick");
};

export const Topbar = ({ title, icon1 = null, icon2 = null, icon3 = null }) => {
  return (
    <div className={styles.topbarWrapper}>
      <p className={styles.topbarTitle}>{title}</p>
      <div className={styles.topbarIcons}>
        {icon3 && (
          <img
            src={icon3}
            className={styles.topbarIcon}
            alt="icon3"
            onClick={alarmClick}
          />
        )}
        {icon2 && (
          <img
            src={icon2}
            className={styles.topbarIcon}
            alt="icon2"
            onClick={alarmClick}
          />
        )}
        {icon1 && (
          <img
            src={icon1}
            className={styles.topbarIcon}
            alt="icon1"
            onClick={alarmClick}
          />
        )}
      </div>
    </div>
  );
};

export const TopbarOpacity = ({
  title,
  icon1 = null,
  icon2 = null,
  icon3 = null,
}) => {
  return (
    <div className={styles.topbarWrapperOpacity}>
      <p className={styles.topbarTitle}>{title}</p>
      <div className={styles.topbarIcons}>
        {icon3 && (
          <img
            src={icon3}
            className={styles.topbarIcon}
            alt="icon3"
            onClick={alarmClick}
          />
        )}
        {icon2 && (
          <img
            src={icon2}
            className={styles.topbarIcon}
            alt="icon2"
            onClick={alarmClick}
          />
        )}
        {icon1 && (
          <img
            src={icon1}
            className={styles.topbarIcon}
            alt="icon1"
            onClick={alarmClick}
          />
        )}
      </div>
    </div>
  );
};

export const TopbarSub = ({
  title,
  icon1 = null,
  icon2 = null,
  icon3 = null,
}) => {
  return (
    <div className={styles.topbarWrapper}>
      <img
        src={ArrowBackIcon}
        className={styles.topbarIcon}
        alt="arrowBack"
        onClick={arrowClick}
      />
      <p className={styles.topbarTitle}>{title}</p>
      <div className={styles.topbarIcons}>
        {icon3 && (
          <img
            src={icon3}
            className={styles.topbarIcon}
            alt="icon3"
            onClick={alarmClick}
          />
        )}
        {icon2 && (
          <img
            src={icon2}
            className={styles.topbarIcon}
            alt="icon2"
            onClick={alarmClick}
          />
        )}
        {icon1 && (
          <img
            src={icon1}
            className={styles.topbarIcon}
            alt="icon1"
            onClick={alarmClick}
          />
        )}
      </div>
    </div>
  );
};
