import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../LookbookImgAdd/LookbookImgAdd.module.css";
import { TabbarCategory } from "../../components/Tabbar/Tabbar";
import DropdownButtonLookBook from "../../components/DropdownButton/DropdownButtonLookBook";
import clothesIcon from "../../assets/icons/ClosetCard/Clothes_Icon.png";
import checkboxIcon from "../../assets/icons/Lookbookcard/checkboxIcon.png";
import uncheckboxIcon from "../../assets/icons/Lookbookcard/uncheckboxIcon.png";

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
  { uri: "https://picsum.photos/80/80", category: "outer" },
  { uri: "https://picsum.photos/80/80", category: "outer" },
  { uri: "https://picsum.photos/80/80", category: "outer" },
  { uri: "https://picsum.photos/80/80", category: "top" },
  { uri: "https://picsum.photos/80/80", category: "top" },
  { uri: "https://picsum.photos/80/80", category: "bottom" },
  { uri: "https://picsum.photos/80/80", category: "shoes" },
  { uri: "https://picsum.photos/80/80", category: "onepiece" },
];
const DUMMY_CLOSET = [
  {
    name: "전체 옷장",
    lock: true,
    clothes: [
      { uri: "https://picsum.photos/80/80", category: "outer" },
      { uri: "https://picsum.photos/80/80", category: "outer" },
      { uri: "https://picsum.photos/80/80", category: "outer" },
      { uri: "https://picsum.photos/80/80", category: "top" },
      { uri: "https://picsum.photos/80/80", category: "top" },
      { uri: "https://picsum.photos/80/80", category: "bottom" },
      { uri: "https://picsum.photos/80/80", category: "shoes" },
      { uri: "https://picsum.photos/80/80", category: "onepiece" },
    ],
  },
  {
    name: "데일리",
    lock: false,
    clothes: [
      { uri: "https://picsum.photos/80/80", category: "outer" },
      { uri: "https://picsum.photos/80/80", category: "outer" },
      { uri: "https://picsum.photos/80/80", category: "top" },
      { uri: "https://picsum.photos/80/80", category: "bottom" },
      { uri: "https://picsum.photos/80/80", category: "shoes" },
      { uri: "https://picsum.photos/80/80", category: "onepiece" },
    ],
  },
  {
    name: "데이트",
    lock: true,
    clothes: [],
  },
];

const LookbookImgAdd = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [checkImg, setCheckImg] = useState([]);
  const [closetName, setClosetName] = useState("전체 옷장");
  const [closetNames, setClosetNames] = useState([]);
  const [filterData, setFilterData] = useState([...DUMMY_CLOTHES]);
  const clothesClick = index => {
    // navigate("/clothesDetail");
    if (checkImg.includes(index)) {
      setCheckImg(checkImg.filter(item => item !== index));
    } else {
      setCheckImg([...checkImg, index]);
    }
  };
  useEffect(() => {
    const closeFiltertNames = DUMMY_CLOSET.map(closet => closet.name);
    setClosetNames([...closeFiltertNames]);
  }, []);
  useEffect(() => {}, [checkImg]);
  useEffect(() => {
    const closetFilterClothes =
      DUMMY_CLOSET.find(closet => closet.name === closetName)?.clothes || [];
    setFilterData([...closetFilterClothes]);
  }, [closetName]);
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
    <div className={styles.LookbookImgAddWrapper}>
      <div className={styles.LookbookImgAddClosetName}>
        <p className={styles.LookbookImgAddClosetNameTitle}>옷장</p>
        <DropdownButtonLookBook
          itemList={closetNames}
          firstData={closetName}
          setClosetName={setClosetName}
        />
      </div>
      <div className={styles.closetDetailWrapper}>
        <TabbarCategory tabNames={TAB_NAMES} setCategory={setCategory} />
        <div className={styles.closetDetailContentWrapper}>
          <div className={styles.closetDetailImgs}>
            {filterData.length > 0 ? (
              filterData.map((item, index) => (
                <div
                  onClick={() => clothesClick(index)}
                  style={{
                    backgroundImage: `url(${item.uri})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minWidth: "100%",
                    // minHeight: "80px",
                    aspectRatio: "1 / 1",
                    position: "relative",
                  }}
                >
                  <img
                    src={
                      checkImg.includes(index) ? checkboxIcon : uncheckboxIcon
                    }
                    className={styles.checkBoxIcon}
                  />
                </div>
                //     <img
                //     onClick={clothesClick}
                //     key={index}
                //     src={item.uri}
                //     alt="clothesImg"
                //     className={styles.closetDetailImg}
                //   />
              ))
            ) : (
              <div className={styles.closetContentNull}>
                <img
                  src={clothesIcon}
                  alt="clothesIcon"
                  className={styles.closetContentNullIcon}
                />
                <p className={styles.closetContentNullText}>
                  옷장이 비어있어요!
                </p>
                <p className={styles.closetContentNullText}>
                  옷을 추가해 보세요!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookbookImgAdd;
