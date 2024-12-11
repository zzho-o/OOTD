import React from "react";
import styles from "../Feed/Feed.module.css";
import { OOTDcardSimple } from "../../components/OOTD_card/OOTDcard.jsx";

const DUMMY_DATA = [
  { id: "USER_id_aaa" },
  { id: "USER_id_bbb" },
  { id: "USER_id_ccc" },
  { id: "USER_id_ddd" },
  { id: "USER_id_eee" },
];

const Feed = () => {
  return (
    <div className={styles.FeedWrapper}>
      {DUMMY_DATA.map(item => (
        <OOTDcardSimple user={item} />
      ))}
    </div>
  );
};

export default Feed;
