import React from "react";
import { Lookbook_card_Edit } from "../../components/Lookbook_card/Lookbook_card";
import styles from "../LookbookEdit/LookbookEdit.module.css";

const LookbookEdit = () => {
  return (
    <div className={styles.LookbookEditWrapper}>
      <Lookbook_card_Edit />
    </div>
  );
};

export default LookbookEdit;
