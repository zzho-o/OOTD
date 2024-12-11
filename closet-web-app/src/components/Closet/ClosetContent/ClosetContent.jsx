import React from "react";
import styles from "../ClosetContent/ClosetContent.module.css";
import ClosetCard from "../ClosetCard/ClosetCard";

const ClosetContent = ({ closetData }) => {
  const btnClick = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("closetAdd");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  return (
    <div className={styles.closetContentWrapper}>
      <div className={styles.closetContents}>
        {closetData.length > 0 ? (
          closetData.map((item, index) => (
            <ClosetCard closetData={item} key={index} />
          ))
        ) : (
          <ClosetCard
            closetData={{
              name: "전체 옷장",
              lock: true,
              clothes: [],
            }}
          />
        )}
      </div>
      <div onClick={btnClick} className={styles.closetContentButton}>
        옷장 추가하기
      </div>
    </div>
  );
};

export default ClosetContent;
