import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClosetCard.module.css";
import lockIcon from "../../../assets/icons/ClosetCard/Lock_Icon.png";
import unLockIcon from "../../../assets/icons/ClosetCard/UnLock_Icon.png";
import clothesIcon from "../../../assets/icons/ClosetCard/Clothes_Icon.png";

const ClosetCard = ({ closetData }) => {
  const navigate = useNavigate();
  const closetClick = () => {
    navigate("/closetDetail");
  };

  return (
    <div onClick={closetClick} className={styles.closetCardWrapper}>
      <div className={styles.closetCardPreview}>
        {closetData.clothes.length > 0 ? (
          <div className={styles.closetCardPreviewContainer}>
            {closetData.clothes[0] && (
              <img
                src={closetData.clothes[0].uri}
                alt="previewimg"
                className={styles.closetCardPreviewItem0}
              />
            )}
            {closetData.clothes[1] && (
              <img
                src={closetData.clothes[1].uri}
                alt="previewimg"
                className={styles.closetCardPreviewItem1}
              />
            )}
            {closetData.clothes[2] && (
              <img
                src={closetData.clothes[2].uri}
                alt="previewimg"
                className={styles.closetCardPreviewItem2}
              />
            )}
            {closetData.clothes[3] && (
              <img
                src={closetData.clothes[3].uri}
                alt="previewimg"
                className={styles.closetCardPreviewItem3}
              />
            )}
          </div>
        ) : (
          <div className={styles.closetCardPreviewIconWrapper}>
            <img
              src={clothesIcon}
              alt="clothesIcon"
              className={styles.closetCardPreviewIcon}
            />
          </div>
        )}
      </div>
      <div className={styles.closetCardInform}>
        <div className={styles.closetCardInformText}>
          <p className={styles.closetCardInformTextName}>{closetData.name}</p>
          <p className={styles.closetCardInformTextCount}>
            {closetData.clothes.length}
          </p>
        </div>
        {closetData.lock ? (
          <img
            src={lockIcon}
            alt="lockIcon"
            className={styles.closetCardIcon}
          />
        ) : (
          <img
            src={unLockIcon}
            alt="unLockIcon"
            className={styles.closetCardIcon}
          />
        )}
      </div>
    </div>
  );
};

export default ClosetCard;
