import React, { useState, useEffect } from "react";
import styles from "../Clothes/ClothesImgAdd.module.css";
import { TabbarImg } from "../../components/Tabbar/Tabbar";
import albumIcon from "../../assets/icons/Tabbar/albumIcon.png";
import internetIcon from "../../assets/icons/Tabbar/internetIcon.png";
import clothesIcon from "../../assets/icons/ClosetCard/Clothes_Icon.png";
import Check_box_Icon from "../../assets/icons/ClothesAdd/Check_box_Icon.png";
import Search_Icon from "../../assets/icons/ClothesAdd/Search_Icon.png";

const DUMMY_CLOTHES = [
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/161867/66e0332c28fcb.jpg", category: "outer" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/161867/66e0332c29d81.jpg", category: "outer" },
];

const ClothesImgAdd = () => {
  const [content, setContent] = useState("Album");
  const [checkImg, setCheckImg] = useState();
  const [checkIndex, setCheckIndex] = useState();
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const handleSearch = e => {
    e.preventDefault();
    if (query.trim() !== "") {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(searchUrl);
      }
    }
  };

  const clothesClick = (item, index) => {
    if (checkIndex === index) {
      setCheckImg(null);
      setCheckIndex(null);
    } else {
      setCheckImg(item);
      setCheckIndex(index);
    }
  };

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(content);
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  }, [content, checkImg]);

  return (
    <div className={styles.ClothesImgAddWrapper}>
      <TabbarImg
        tabNames={[
          { title: "앨범에서 선택", content: "Album", img: albumIcon },
          { title: "쇼핑몰에서 찾기", content: "Internet", img: internetIcon },
        ]}
        setContent={setContent}
      />
      <div className={styles.ClothesImgAddContentWrapper}>
        {content === "Album" ? (
          <div className={styles.ClothesImgAddContentImgs}>
            {DUMMY_CLOTHES.length > 0 ? (
              DUMMY_CLOTHES.map((item, index) =>
                item === checkImg ? (
                  <div
                    onClick={() => clothesClick(item, index)}
                    key={index}
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: 0,
                      margin: 0,
                      backgroundImage: `url(${item.uri})`,
                      backgroundSize: "cover",
                      position: "relative",
                    }}
                  >
                    <img
                      src={Check_box_Icon}
                      alt="checkboxIcon"
                      className={styles.ClothesImgAddNullCheckIcon}
                    />
                  </div>
                ) : (
                  <img
                    onClick={() => clothesClick(item, index)}
                    key={index}
                    src={item.uri}
                    alt="clothesImg"
                    className={styles.ClothesImgAddContentImg}
                  />
                )
              )
            ) : (
              <div className={styles.ClothesImgAddNull}>
                <img
                  src={clothesIcon}
                  alt="clothesIcon"
                  className={styles.ClothesImgAddNullIcon}
                />
                <p className={styles.ClothesImgAddNullText}>
                  앨범이 비어있어요!
                </p>
                <p className={styles.ClothesImgAddNullText}>
                  옷을 추가해 보세요!
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.ClothesImgAddShoppingMallWrapper}>
            <div className={styles.ClothesImgAddSearchWrapper}>
              <form
                onSubmit={handleSearch}
                className={styles.ClothesImgAddSearchBar}
              >
                <input
                  className={styles.ClothesImgAddSearchBarInput}
                  placeholder={
                    focus === true ? "" : "URL 이나 쇼핑몰을 입력해주세요"
                  }
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onFocus={() => setFocus(true)}
                  onBlur={() => {
                    setFocus(false);
                  }}
                />
                <button type="submit">
                  <img
                    src={Search_Icon}
                    alt="serachIcon"
                    className={styles.ClothesImgAddSearchBarIcon}
                  />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothesImgAdd;
