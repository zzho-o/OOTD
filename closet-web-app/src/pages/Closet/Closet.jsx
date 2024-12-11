import React, { useState, useEffect } from "react";
import styles from "../Closet/Closet.module.css";
import ClosetState from "../../components/Closet/ClosetState/ClosetState";
import { Tabbar } from "../../components/Tabbar/Tabbar";
import ClosetContent from "../../components/Closet/ClosetContent/ClosetContent";
import Lookbook from "../../components/Lookbook/Lookbook";

const dummy = [1, 2, 3];
const DUMMY_CLOSET = [
  {
    name: "전체 옷장",
    lock: true,
    clothes: [
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/161867/66e0332c28fcb.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79e483a.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79e74fa.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79ead12.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79eef4b.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79f0cb1.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79f37a4.jpg" },
    ],
  },
  {
    name: "데일리",
    lock: false,
    clothes: [
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/152423/66e29e8c87750.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/152423/66e29e8c89344.jpg" },
      { uri: "https://atimg.sonyunara.com/files/attrangs/goods/152423/66e29e8c8b0b4.jpg" },
    ],
  },
  {
    name: "데이트",
    lock: true,
    clothes: [],
  },
];
const DUMMY_CLOSETN = [];
const DUMMY_LOOKBOOK = [
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
];

const Closet = () => {
  const [content, setContent] = useState("Closet");
  const [clothesCount, setClothesCount] = useState(0);
  useEffect(() => {}, [content]);
  useEffect(() => {
    let count = 0;
    DUMMY_CLOSET.map(item => {
      count += item.clothes.length;
    });
    setClothesCount(count);
  }, []);
  return (
    <div className={styles.closetWrapper}>
      <ClosetState
        closet={DUMMY_CLOSET}
        clothes={clothesCount}
        lookBook={DUMMY_LOOKBOOK}
      />
      <Tabbar
        tabNames={[
          { title: "옷장", content: "Closet" },
          { title: "룩북", content: "LookBook" },
        ]}
        setContent={setContent}
      />
      <div>
        {content === "Closet" ? (
          <ClosetContent closetData={DUMMY_CLOSET} />
        ) : (
          <Lookbook lookbookData={DUMMY_LOOKBOOK} />
        )}
      </div>
    </div>
  );
};

export default Closet;
