import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../ClosetDetail/ClosetDetail.module.css";
import { TabbarCategory } from "../../components/Tabbar/Tabbar";
import clothesIcon from "../../assets/icons/ClosetCard/Clothes_Icon.png";

const TAB_NAMES = [
  { title: "전체", category: "all" },
  { title: "아우터", category: "outer" },
  { title: "상의", category: "top" },
  { title: "원피스/점프스투", category: "onepiece" },
  { title: "하의", category: "bottom" },
  { title: "신발", category: "shoes" },
  { title: "악세서리", category: "accessories" },
];

const DUMMY_CLOTHES = [
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/161867/66e0332c28fcb.jpg" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79e483a.jpg" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79e74fa.jpg" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79ead12.jpg" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79eef4b.jpg" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79f0cb1.jpg" },
  { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79f37a4.jpg" },
];

const ClosetDetail = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [filterData, setFilterData] = useState([...DUMMY_CLOTHES]);
  const clothesClick = () => {
    navigate("/clothesDetail");
  };
  useEffect(() => {
    if (category === "all") {
      setFilterData([...DUMMY_CLOTHES]);
    } else {
      const filterClothes = DUMMY_CLOTHES.filter(
        item => item.category === category
      );
      setFilterData([...filterClothes]);
    }
  }, [category]);
  return (
    <div className={styles.closetDetailWrapper}>
      <TabbarCategory tabNames={TAB_NAMES} setCategory={setCategory} />
      <div className={styles.closetDetailContentWrapper}>
        <div className={styles.closetDetailImgs}>
          {filterData.length > 0 ? (
            filterData.map((item, index) => (
              <img
                onClick={clothesClick}
                key={index}
                src={item.uri}
                alt="clothesImg"
                className={styles.closetDetailImg}
              />
            ))
          ) : (
            <div className={styles.closetContentNull}>
              <img
                src={clothesIcon}
                alt="clothesIcon"
                className={styles.closetContentNullIcon}
              />
              <p className={styles.closetContentNullText}>옷장이 비어있어요!</p>
              <p className={styles.closetContentNullText}>
                옷을 추가해 보세요!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClosetDetail;
