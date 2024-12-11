import React from "react";
import styles from "../Feed/Feed.module.css";
import { OOTDcardAdd } from "../../components/OOTD_card/OOTDcard";

const FeedAdd = () => {
  return (
    <div className={styles.FeedWrapper}>
      <OOTDcardAdd user={{ id: "User_aaa" }} />
    </div>
  );
};

export default FeedAdd;
