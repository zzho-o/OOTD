import React, { useState, useEffect } from "react";
import styles from "../Tabbar/Tabbar.module.css";

export const Tabbar = ({ tabNames, setContent = () => {} }) => {
  const [tabState, setTabState] = useState(0);
  const tabClick = (tabIndex, content) => {
    setTabState(tabIndex);
    setContent(content);
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(content);
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  useEffect(() => {}, [tabState]);
  return (
    <div className={styles.tabbarWrapper}>
      {tabNames.map((item, index) => (
        <div
          key={index}
          onClick={() => tabClick(index, item.content)}
          className={
            tabState === index
              ? styles.tabbarContentSelect
              : styles.tabbarContent
          }
        >
          <p
            className={
              index < tabNames.length - 1
                ? styles.tabbarContentLine
                : styles.tabbarContentLineNull
            }
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export const TabbarCategory = ({ tabNames, setCategory }) => {
  const [tabState, setTabState] = useState(0);
  const tabClick = (tabIndex, category) => {
    setTabState(tabIndex);
    setCategory(category);
  };
  useEffect(() => {}, [tabState]);
  return (
    <div className={styles.tabbarWrapper}>
      {tabNames.map((item, index) => (
        <div
          key={index}
          onClick={() => tabClick(index, item.category)}
          className={
            tabState === index
              ? styles.tabbarContentSelect
              : styles.tabbarContent
          }
        >
          <p
            className={
              index < tabNames.length - 1
                ? styles.tabbarContentLine
                : styles.tabbarContentLineNull
            }
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export const TabbarImg = ({ tabNames, setContent = () => {} }) => {
  const [tabState, setTabState] = useState(0);
  const tabClick = (tabIndex, content) => {
    setTabState(tabIndex);
    setContent(content);
  };
  useEffect(() => {}, [tabState]);
  return (
    <div className={styles.tabbarImgWrapper}>
      {tabNames.map((item, index) => (
        <div
          key={index}
          onClick={() => tabClick(index, item.content)}
          className={
            tabState === index
              ? styles.tabbarImgContentSelect
              : styles.tabbarImgContent
          }
        >
          <img
            src={item.img}
            alt="tabImg"
            className={styles.tabbarImgContentIcon}
          />
          <p
            className={
              index < tabNames.length - 1
                ? styles.tabbarImgContentLine
                : styles.tabbarImgContentLineNull
            }
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
