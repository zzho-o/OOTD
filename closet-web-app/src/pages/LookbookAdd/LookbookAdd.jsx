import React from "react";
import { Lookbook_card_Add } from "../../components/Lookbook_card/Lookbook_card";
import styles from "../LookbookAdd/LookbookAdd.module.css";

const LookbookEdit = () => {
  return (
    <div className={styles.LookbookEditWrapper}>
      <Lookbook_card_Add />
    </div>
  );
};

export default LookbookEdit;
