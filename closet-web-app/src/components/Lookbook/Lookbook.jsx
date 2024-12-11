import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Lookbook/Lookbook.module.css";
import clothesIcon from "../../assets/icons/ClosetCard/Clothes_Icon.png";

const Lookbook = ({ lookbookData }) => {
  const navigate = useNavigate();
  const btnClick = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("lookbookAdd");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  const lookbookClick = () => {
    console.log("룩북 클릭");
    navigate("/LookbookDetail");
  };

  return (
    <div className={styles.lookbookWrapper}>
      <div className={styles.lookbookContent}>
        {lookbookData.length > 0 ? (
          <div className={styles.lookbookContentImages}>
            {lookbookData.map((item, index) => (
              <img
                onClick={lookbookClick}
                src={item.uri}
                alt="lookbookImg"
                className={styles.lookbookContentImg}
                key={index}
              />
            ))}
          </div>
        ) : (
          <div className={styles.lookbookContentNull}>
            <img
              src={clothesIcon}
              alt="clothesIcon"
              className={styles.lookbookContentNullIcon}
            />
            <p className={styles.lookbookContentNullText}>
              등록된 룩북이 없어요!
            </p>
            <p className={styles.lookbookContentNullText}>
              룩북을 추가해 보세요!
            </p>
          </div>
        )}
        <div onClick={btnClick} className={styles.lookbookContentButton}>
          룩북 추가하기
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
