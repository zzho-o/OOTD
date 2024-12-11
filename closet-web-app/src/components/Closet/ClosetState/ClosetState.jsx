import React from "react";
import styles from "../ClosetState/ClosetState.module.css";

const ClosetState = ({ closet, clothes, lookBook }) => {
  return (
    <div className={styles.closetStateWrapper}>
      <div className={styles.closetStateContent}>
        <p className={styles.closetStateContentTitle}>옷장</p>
        <p className={styles.closetStateContentNum}>{closet.length}</p>
      </div>
      <div className={styles.closetStateContent}>
        <p className={styles.closetStateContentTitle}>옷</p>
        <p className={styles.closetStateContentNum}>{clothes}</p>
      </div>
      <div className={styles.closetStateContent}>
        <p className={styles.closetStateContentTitle}>룩북</p>
        <p className={styles.closetStateContentNum}>{lookBook.length}</p>
      </div>
    </div>
  );
};

export default ClosetState;
