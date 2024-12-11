import React from "react";
import styles from "../Feed/Feed.module.css";
import { OOTDcardEdit } from "../../components/OOTD_card/OOTDcard";

const FeedEdit = () => {
  return (
    <div className={styles.FeedWrapper}>
      <OOTDcardEdit user={{ id: "User_aaa" }} />
    </div>
  );
};

export default FeedEdit;
