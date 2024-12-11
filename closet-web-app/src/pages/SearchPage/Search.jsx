import React, { useState } from "react";
import styles from "../SearchPage/Search.module.css";
import PopularSearch from "../../components/PopularSearch/PopularSearch";
import RecentSearch from "../../components/RecentSearch/RecentSearch";

const DUMMY_POPULARSEARCH = [
  { search: "셔츠" },
  { search: "반팔" },
  { search: "반바지" },
];
const DUMMY_RECENTSEARCH = [
  // { search: "여름", type: "word" },
  // { search: "겨울", type: "word" },
  // { search: "User_id_aaaa", type: "user" },
];
const DUMMY_SEARCHRESULT = [
  // { uri: "https://picsum.photos/80/80" },
  // { uri: "https://picsum.photos/80/80" },
  // { uri: "https://picsum.photos/80/80" },
  // { uri: "https://picsum.photos/80/80" },
  // { uri: "https://picsum.photos/80/80" },
];
const DUMMY_USERRESULT = [
  // { uri: "https://picsum.photos/80/80", id: "User_id" },
  // { uri: "https://picsum.photos/80/80", id: "User_id_bb" },
  // { uri: "https://picsum.photos/80/80", id: "User_id_cccc" },
  // { uri: "https://picsum.photos/80/80", id: "User_id_a11" },
  // { uri: "https://picsum.photos/80/80", id: "User_id_d" },
];

const Search = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchFisrt, setSearchFirst] = useState(true);
  const clothesClick = () => {
    console.log("clothes click");
  };
  const userClick = () => {
    console.log("user click");
  };

  return (
    <div className={styles.SearchWrapper}>
      {DUMMY_SEARCHRESULT.length < 1 &&
        DUMMY_USERRESULT.length < 1 &&
        !searchFisrt && (
          <p className={styles.searchDataNull}>검색 결과가 없습니다.</p>
        )}
      {DUMMY_SEARCHRESULT.length < 1 &&
        DUMMY_USERRESULT.length < 1 &&
        searchWord === "" && (
          <div className={styles.SearchPopularContent}>
            <PopularSearch popularSearchData={DUMMY_POPULARSEARCH} />
            <RecentSearch recentSearchData={DUMMY_RECENTSEARCH} />
          </div>
        )}
      {DUMMY_SEARCHRESULT.length > 0 && (
        <>
          <p className={styles.searchResultContentTotalCount}>
            총 {DUMMY_SEARCHRESULT.length.toLocaleString()}개
          </p>
          <div className={styles.searchResultContentWrapper}>
            <div className={styles.searchResultContentImgs}>
              {DUMMY_SEARCHRESULT.map((item, index) => (
                <img
                  onClick={clothesClick}
                  key={index}
                  src={item.uri}
                  alt="clothesImg"
                  className={styles.searchResultImg}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {DUMMY_USERRESULT.length > 0 && (
        <>
          <p className={styles.UserResultContentTotalCount}>
            총 {DUMMY_USERRESULT.length.toLocaleString()}개
          </p>
          <div className={styles.UserResultContentWrapper}>
            {DUMMY_USERRESULT.map((item, index) => (
              <div className={styles.UserResultContentItem}>
                <img
                  onClick={userClick}
                  key={index}
                  src={item.uri}
                  alt="userImg"
                  className={styles.UserResultContentItemImg}
                />
                <p className={styles.UserResultContentItemId}>{item.id}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
