import React from "react";
import styles from "../Feed/Feed.module.css";
import { OOTDcard } from "../../components/OOTD_card/OOTDcard";

const FeedDetail = () => {
  return (
    <div className={styles.FeedWrapper}>
      <OOTDcard user={{ id: "User_aaa" }} />
    </div>
  );
};

export default FeedDetail;
