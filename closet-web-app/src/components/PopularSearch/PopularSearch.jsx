import React from "react";
import styles from "../PopularSearch/PopularSearch.module.css";

const PopularSearch = ({ popularSearchData }) => {
  return (
    <div className={styles.popularSearchWrapper}>
      <p className={styles.popularSearchTitle}>인기 검색어</p>
      {popularSearchData.map((item, index) => (
        <p className={styles.popularSearchData}>
          {index + 1}. {item.search}
        </p>
      ))}
    </div>
  );
};

export default PopularSearch;
