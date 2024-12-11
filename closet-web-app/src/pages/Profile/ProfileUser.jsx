import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Profile/ProfileUser.module.css";
import UserProfile from "../../components/UserProfile/UserProfile.jsx";
import { Tabbar } from "../../components/Tabbar/Tabbar";
import ClosetContent from "../../components/Closet/ClosetContent/ClosetContent";
import Lookbook from "../../components/Lookbook/Lookbook";
import clothesIcon from "../../assets/icons/ClosetCard/Clothes_Icon.png";
import favoriteIcon from "../../assets/icons/Profile/favorite_Icon.png";
import cloth1 from "../../assets/image/cloth1.jpeg";
import cloth2 from "../../assets/image/cloth2.jpg";
import cloth3 from "../../assets/image/cloth3.jpg";
import cloth4 from "../../assets/image/cloth4.jpeg";
import cloth5 from "../../assets/image/cloth5.jpeg";
import cloth6 from "../../assets/image/cloth6.jpeg";
import cloth7 from "../../assets/image/cloth7.jpeg";
import cloth8 from "../../assets/image/cloth8.jpeg";
import feed1 from "../../assets/image/feed1.jpg";
import feed2 from "../../assets/image/feed2.jpg";
import feed3 from "../../assets/image/feed3.jpg";
import feed4 from "../../assets/image/feed4.jpg";
import feed5 from "../../assets/image/feed5.jpg";
import feed6 from "../../assets/image/feed6.jpeg";
import feed7 from "../../assets/image/feed7.jpg";
import feed8 from "../../assets/image/feed8.jpg";
import feed9 from "../../assets/image/feed9.jpg";
import feed10 from "../../assets/image/feed10.jpg";

const DUMMY_Feed = [
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
  { uri: "https://picsum.photos/80/80" },
];
const DUMMY_DATAFEED = [
  { img: feed3 },
  { img: feed6 },
  { img: feed8 },
  { img: feed9 },
];
const DUMMY_DATALOOKBOOK = [
  { uri: feed3 },
  { uri: feed6 },
  { uri: feed8 },
  { uri: feed9 },
];
const DUMMY_CLOSET = [
  {
    name: "전체 옷장",
    lock: true,
    clothes: [
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
    ],
  },
  {
    name: "데일리",
    lock: false,
    clothes: [
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
      { uri: "https://picsum.photos/80/80" },
    ],
  },
  {
    name: "데이트",
    lock: true,
    clothes: [],
  },
];
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

const ProfileUser = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("OOTD");
  const feedClick = () => {
    navigate("/feed/detail");
  };
  const heartClick = () => {
    console.log("heartClick");
  };

  useEffect(() => {}, [content]);
  return (
    <div className={styles.ProfileUserWrapper}>
      <UserProfile />
      <Tabbar
        tabNames={[
          { title: "OOTD", content: "OOTD" },
          { title: "옷장", content: "Closet" },
          { title: "룩북", content: "Lookbook" },
        ]}
        setContent={setContent}
      />
      <div className={styles.UserFeedWrapper}>
        {content === "OOTD" && (
          <div className={styles.UserFeedContent}>
            {DUMMY_Feed.length > 0 ? (
              <div className={styles.UserFeedContentImages}>
                {/* {DUMMY_Feed.map((item, index) => ( */}
                {DUMMY_DATAFEED.map((item, index) => (
                  <img
                    onClick={feedClick}
                    // src={item.uri}
                    src={item.img}
                    alt="lookbookImg"
                    className={styles.UserFeedContentImage}
                    key={index}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.UserFeedContentNull}>
                <img
                  src={clothesIcon}
                  alt="clothesIcon"
                  className={styles.UserFeedContentNullIcon}
                />
                <p className={styles.UserFeedContentNullText}>
                  등록된 OOTD가 없어요!
                </p>
              </div>
            )}
          </div>
        )}
        {content === "Closet" && <ClosetContent closetData={DUMMY_CLOSET} />}
        {/* {content === "Lookbook" && <Lookbook lookbookData={DUMMY_LOOKBOOK} />} */}
        {content === "Lookbook" && (
          <Lookbook lookbookData={DUMMY_DATALOOKBOOK} />
        )}
      </div>
    </div>
  );
};

export default ProfileUser;
