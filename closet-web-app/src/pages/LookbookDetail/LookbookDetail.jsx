import React from "react";
import { Lookbook_card } from "../../components/Lookbook_card/Lookbook_card";
import styles from "../LookbookDetail/LookbookDetail.module.css";

const LookbookDetail = () => {
  return (
    <div className={styles.LookbookDetailWrapper}>
      <Lookbook_card />
    </div>
  );
};

export default LookbookDetail;
