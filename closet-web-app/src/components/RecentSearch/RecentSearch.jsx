import React, { useState, useEffect } from "react";
import styles from "../RecentSearch/RecentSearch.module.css";
import searchIcon from "../../assets/icons/SearchPage/searchIcon.png";
import closeIcon from "../../assets/icons/SearchPage/closeIcon.png";

const RecentSearch = ({ recentSearchData }) => {
  const [searchData, setSearchData] = useState([...recentSearchData]);
  const allDelete = () => {
    setSearchData([]);
  };
  const deleteClick = (deleteIndex) => {
    const filterData = searchData.filter(
      (item, index) => index !== deleteIndex
    );
    setSearchData([...filterData]);
  };

  useEffect(() => {}, [searchData]);
  return (
    <div className={styles.RecentSearchWrapper}>
      {searchData.length > 0 ? (
        <div className={styles.RecentSearchList}>
          <div className={styles.RecentSearchListTitle}>
            <p className={styles.RecentSearchListTitleText}>최근 검색어</p>
            <p
              onClick={allDelete}
              className={styles.RecentSearchListTitleButton}
            >
              전체 삭제
            </p>
          </div>
          {searchData.map((item, index) => (
            <div className={styles.RecentSearchListItemWrapper}>
              <div className={styles.RecentSearchListItembox}>
                <div className={styles.RecentSearchListItemImg}>
                  {item.type === "word" ? (
                    <img
                      src={searchIcon}
                      alt="serachIcon"
                      className={styles.RecentSearchListItemImgIcon}
                    />
                  ) : (
                    <img
                      src="https://picsum.photos/35/35"
                      alt="profileImg"
                      className={styles.RecentSearchListItemImgProfile}
                    />
                  )}
                </div>
                {item.type === "word" ? (
                  <p className={styles.RecentSearchListItemText}>
                    {item.search}
                  </p>
                ) : (
                  <p className={styles.RecentSearchListItemUserId}>
                    {item.search}
                  </p>
                )}
              </div>
              <img
                onClick={() => deleteClick(index)}
                src={closeIcon}
                alt="closeIcon"
                className={styles.RecentSearchListItemCloseBtn}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.RecentSearchNullContent}>
          <p className={styles.RecentSearchNullText}>
            @을 붙이면 아이디 검색이 가능합니다
          </p>
          <p className={styles.RecentSearchNullText}>ex) @Chulsu</p>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
