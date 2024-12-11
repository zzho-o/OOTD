import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Profile/ProfileMine.module.css";
import MyProfile from "../../components/MyProfile/MyProfile";
import { Tabbar } from "../../components/Tabbar/Tabbar";
import clothesIcon from "../../assets/icons/ClosetCard/Clothes_Icon.png";
import favoriteIcon from "../../assets/icons/Profile/favorite_Icon.png";
import feed3 from "../../assets/image/feed3.jpg";
import feed6 from "../../assets/image/feed6.jpeg";
import feed8 from "../../assets/image/feed8.jpg";
import feed9 from "../../assets/image/feed9.jpg";

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
  { uri: feed3 },
  { uri: feed6 },
  { uri: feed8 },
  { uri: feed9 },
];

const ProfileMine = () => {
  const navigate = useNavigate();
  const feedClick = () => {
    navigate("/feed/detail");
  };
  const heartClick = () => {
    console.log("heartClick");
  };
  return (
    <div className={styles.ProfileMineWrapper}>
      <MyProfile />
      <Tabbar tabNames={[{ title: "OOTD", content: "OOTD" }]} />
      <div className={styles.MyFeedWrapper}>
        <div className={styles.MyFeedContent}>
          {DUMMY_Feed.length > 0 ? (
            <div className={styles.MyFeedContentImages}>
              {DUMMY_DATAFEED.map((item, index) => (
                // <div
                //   onClick={feedClick}
                //   style={{
                //     width: "129px",
                //     height: "129px",
                //     padding: 0,
                //     margin: 0,
                //     backgroundImage: `url(${item.uri})`,
                //     position: "relative",
                //   }}
                // >
                //   <img
                //     onClick={heartClick}
                //     src={favoriteIcon}
                //     alt="lookbookImg"
                //     className={styles.MyFeedContentImageheart}
                //     key={index}
                //   />
                // </div>
                <img
                  onClick={feedClick}
                  src={item.uri}
                  alt="lookbookImg"
                  className={styles.MyFeedContentImage}
                />
              ))}
            </div>
          ) : (
            <div className={styles.MyFeedContentNull}>
              <img
                src={clothesIcon}
                alt="clothesIcon"
                className={styles.MyFeedContentNullIcon}
              />
              <p className={styles.MyFeedContentNullText}>
                등록된 OOTD가 없어요!
              </p>
              <p className={styles.MyFeedContentNullText}>
                OOTD피드에서 나만의 OOTD를 등록 해보세요!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileMine;
