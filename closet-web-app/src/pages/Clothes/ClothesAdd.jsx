import React from "react";
import styles from "../Clothes/ClothesAdd.module.css";
import { ClothDetail_card_Add } from "../../components/ClothDetail_card/ClothDetail_card";

const ClothesAdd = () => {
  return (
    <div className={styles.ClothesAddWrapper}>
      <ClothDetail_card_Add />
    </div>
  );
};

export default ClothesAdd;
