import React from "react";
import styles from "../ClosetDetail/ClosetDetail.module.css";
import { ClothDetail_card } from "../../components/ClothDetail_card/ClothDetail_card";

const ClothesDetail = () => {
  return (
    <div className={styles.ClothesDetailWrapper}>
      <ClothDetail_card />
    </div>
  );
};

export default ClothesDetail;
