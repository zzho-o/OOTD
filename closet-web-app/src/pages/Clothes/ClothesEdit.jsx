import React from "react";
import styles from "../Clothes/ClothesEdit.module.css";
import { ClothDetail_card_Edit } from "../../components/ClothDetail_card/ClothDetail_card";

const ClothesEdit = () => {
  return (
    <div className={styles.ClothesEditWrapper}>
      <ClothDetail_card_Edit />
    </div>
  );
};

export default ClothesEdit;
