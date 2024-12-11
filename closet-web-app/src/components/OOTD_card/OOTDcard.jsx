import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../OOTD_card/OOTDcard.module.css";
import moreIcon from "../../assets/icons/OOTDcard/More_Icon.png";
import heartIcon from "../../assets/icons/OOTDcard/favorite_Icon.png";
import heartOnIcon from "../../assets/icons/OOTDcard/favorite_on_Icon.png";
import commentsIcon from "../../assets/icons/OOTDcard/Comments_Icon.png";
import shareIcon from "../../assets/icons/OOTDcard/Share_Icon.png";
import closeIcon from "../../assets/icons/OOTDcard/Close_Icon.png";
import addClothesIcon from "../../assets/icons/OOTDcard/add_Clothes.png";
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

const DUMMY_DATA = [
  { img: "https://picsum.photos/412/412" },
  { img: "https://picsum.photos/412/412" },
  { img: "https://picsum.photos/412/412" },
  { img: "https://picsum.photos/412/412" },
  { img: "https://picsum.photos/412/412" },
];
const DUMMY_DATAFEED = [
  { img: feed3 },
  { img: feed6 },
  { img: feed8 },
  { img: feed9 },
];
const DUMMY_CONTENT = [
  {
    title: "덥당!",
    tag: "#오늘의 OOTD",
    time: "5시간전",
    heart: 15585,
    comments: [{ userId: "댓글러", comment: "와 옷정말멋지세요" }],
  },
];
const DUMMY_CLOTHES = [
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
  { img: "https://picsum.photos/48/48" },
];
const DUMMY_CLOTHESIMG = [
  { img: cloth1 },
  { img: cloth2 },
  { img: cloth3 },
  { img: cloth4 },
  { img: cloth5 },
  { img: cloth6 },
  { img: cloth7 },
  { img: cloth8 },
];
const DUMMY_ADD = [];
const DUMMY_ADDCLOTHES = [];

export const OOTDcardSimple = ({ user }) => {
  const navigate = useNavigate();
  const [follow, setFollow] = useState(false);
  const [heartState, setHeartState] = useState(false);
  const pagination = {
    clickable: true,
    el: `.${styles.customPagination}`,
  };
  const profileClick = () => {
    navigate("/profileUser");
  };
  const folowBtnClick = () => {
    setFollow(!follow);
  };
  const moreBtnClick = () => {
    console.log("moreButton Click");
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("moreIcon");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  const feedClick = () => {
    navigate("/feed/detail");
  };
  const tagClick = hashTag => {
    console.log(`${hashTag} click`);
    navigate("/search");
  };
  const heartClick = () => {
    setHeartState(!heartState);
  };
  const commentClick = () => {
    console.log("comments click");
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("comment");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  const shareClick = () => {
    console.log("share click");
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("shareIcon");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };

  return (
    <div className={styles.OOTDcardWrapper}>
      <div className={styles.OOTDcardInformBar}>
        <div className={styles.OOTDcardInformProfile}>
          <img
            onClick={profileClick}
            src="https://picsum.photos/123/123"
            // src={feed3}
            alt="profile"
            className={styles.OOTDcardInformProfileImg}
          />
          <p onClick={profileClick} className={styles.OOTDcardInformProfileId}>
            {user.id}
          </p>
        </div>
        <div className={styles.OOTDcardInformButtons}>
          <div
            onClick={folowBtnClick}
            className={
              follow
                ? styles.OOTDcardInformFollowingBtn
                : styles.OOTDcardInformFollowBtn
            }
          >
            {follow ? "팔로잉" : "팔로우"}
          </div>
          <img onClick={moreBtnClick} src={moreIcon} alt="더보기 아이콘" />
        </div>
      </div>
      <div className={styles.OOTDcardImageSwiper}>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className={"mySwiper"}
        >
          {DUMMY_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={feedClick}
                className={styles.OOTDcardImageSwiperImg}
                src={item.img}
                alt="img"
              />
            </SwiperSlide>
          ))}
          <div className={styles.customPagination}></div>
        </Swiper>
      </div>
      <div className={styles.OOTDcardContent}>
        <div className={styles.OOTDcardContentDescription}>
          <p className={styles.OOTDcardContentDesTitle}>
            {DUMMY_CONTENT[0].title}
          </p>
          <p
            onClick={() => tagClick(DUMMY_CONTENT[0].tag)}
            className={styles.OOTDcardContentDesTag}
          >
            {DUMMY_CONTENT[0].tag}
          </p>
          <p className={styles.OOTDcardContentDesTime}>
            {DUMMY_CONTENT[0].time}
          </p>
        </div>
        <div className={styles.OOTDcardContentIconWrapper}>
          <div className={styles.OOTDcardContentIcons}>
            <img
              onClick={heartClick}
              src={heartState ? heartOnIcon : heartIcon}
              alt="heartIcon"
              className={styles.OOTDcardContentIcon}
            />
            <img
              onClick={commentClick}
              src={commentsIcon}
              alt="commentsIcon"
              className={styles.OOTDcardContentIcon}
            />
            <img
              onClick={shareClick}
              src={shareIcon}
              alt="shareIcon"
              className={styles.OOTDcardContentIcon}
            />
          </div>
          <div className={styles.OOTDcardContentHeart}>
            좋아요 {DUMMY_CONTENT[0].heart.toLocaleString()}개
          </div>
        </div>
      </div>
    </div>
  );
};

export const OOTDcard = ({ user }) => {
  const navigate = useNavigate();
  const [follow, setFollow] = useState(false);
  const [heartState, setHeartState] = useState(false);

  const pagination = {
    clickable: true,
    el: `.${styles.customPagination}`,
  };
  const profileClick = () => {
    navigate("/profileUser");
  };
  const folowBtnClick = () => {
    setFollow(!follow);
  };
  const moreBtnClick = () => {
    console.log("moreButton Click");
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("moreIcon");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  const clothClick = () => {
    navigate("/clothesDetail");
  };
  const tagClick = hashTag => {
    console.log(`${hashTag} click`);
    navigate("/search");
  };
  const heartClick = () => {
    setHeartState(!heartState);
  };
  const commentClick = () => {
    console.log("comments click");
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("comment");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };
  const shareClick = () => {
    console.log("share click");
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("shareIcon");
    } else {
      console.log("ReactNativeWebView is not available.");
    }
  };

  return (
    <div className={styles.OOTDcardWrapper}>
      <div className={styles.OOTDcardInformBar}>
        <div className={styles.OOTDcardInformProfile}>
          <img
            onClick={profileClick}
            // src="https://picsum.photos/123/123"
            src={feed3}
            alt="profile"
            className={styles.OOTDcardInformProfileImg}
          />
          <p onClick={profileClick} className={styles.OOTDcardInformProfileId}>
            {user.id}
          </p>
        </div>
        <div className={styles.OOTDcardInformButtons}>
          <div
            onClick={folowBtnClick}
            className={
              follow
                ? styles.OOTDcardInformFollowingBtn
                : styles.OOTDcardInformFollowBtn
            }
          >
            {follow ? "팔로잉" : "팔로우"}
          </div>
          <img onClick={moreBtnClick} src={moreIcon} alt="더보기 아이콘" />
        </div>
      </div>
      <div className={styles.OOTDcardImageSwiper}>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className={"mySwiper"}
        >
          {/* {DUMMY_DATA.map((item, index) => ( */}
          {DUMMY_DATAFEED.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className={styles.OOTDcardImageSwiperImg}
                src={item.img}
                alt="img"
              />
            </SwiperSlide>
          ))}
          <div className={styles.customPagination}></div>
        </Swiper>
      </div>
      <div className={styles.OOTDcardClothes}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          className={styles.mySwiperClothes}
        >
          {/* {DUMMY_CLOTHES.map((item, index) => ( */}
          {DUMMY_CLOTHESIMG.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideCustom}>
              <img
                onClick={clothClick}
                className={styles.OOTDcardCloth}
                src={item.img}
                alt="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.OOTDcardDetailContent}>
        <div className={styles.OOTDcardContentIconWrapper}>
          <div className={styles.OOTDcardContentIcons}>
            <img
              onClick={heartClick}
              src={heartState ? heartOnIcon : heartIcon}
              alt="heartIcon"
              className={styles.OOTDcardContentIcon}
            />
            <img
              onClick={commentClick}
              src={commentsIcon}
              alt="commentsIcon"
              className={styles.OOTDcardContentIcon}
            />
            <img
              onClick={shareClick}
              src={shareIcon}
              alt="shareIcon"
              className={styles.OOTDcardContentIcon}
            />
          </div>
          <div className={styles.OOTDcardContentHeart}>
            좋아요 {DUMMY_CONTENT[0].heart.toLocaleString()}개
          </div>
        </div>
        <div className={styles.OOTDcardContentDescription}>
          <p className={styles.OOTDcardContentDesTitle}>
            {DUMMY_CONTENT[0].title}
          </p>
          <p
            onClick={() => tagClick(DUMMY_CONTENT[0].tag)}
            className={styles.OOTDcardContentDesTag}
          >
            {DUMMY_CONTENT[0].tag}
          </p>
        </div>
        <div>
          <p className={styles.OOTDcardContentDesTime}>
            {DUMMY_CONTENT[0].time}
          </p>
        </div>
        {DUMMY_CONTENT.comments !== null && (
          <div className={styles.OOTDcardPreviewComment}>
            <p className={styles.OOTDcardPreviewCommentUserId}>
              {DUMMY_CONTENT[0].comments[0].userId}
            </p>
            <p className={styles.OOTDcardPreviewCommentComment}>
              {DUMMY_CONTENT[0].comments[0].comment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const OOTDcardEdit = ({ user }) => {
  const pagination = {
    clickable: true,
    el: `.${styles.customPagination}`,
  };
  const closeClick = () => {
    console.log("Delete");
  };
  const closeminiClick = () => {
    console.log("Delete Mini");
  };
  const addClothClick = () => {
    console.log("clothesAdd");
  };
  return (
    <div className={styles.OOTDcardWrapper}>
      <div className={styles.OOTDcardImageSwiper}>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className={"mySwiper"}
        >
          {DUMMY_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: "412px",
                  height: "412px",
                  position: "relative",
                }}
              >
                <img
                  onClick={closeClick}
                  src={closeIcon}
                  alt="closeIcon"
                  className={styles.OOTDcardEditCloseBtn}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.customPagination}></div>
        </Swiper>
      </div>
      <div className={styles.OOTDcardClothes}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          className={styles.mySwiperClothes}
        >
          {DUMMY_CLOTHES.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideCustom}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: "48px",
                  height: "48px",
                  position: "relative",
                }}
              >
                <img
                  onClick={closeminiClick}
                  src={closeIcon}
                  alt="closeIcon"
                  className={styles.OOTDcardEditCloseBtnMini}
                />
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div
              onClick={addClothClick}
              style={{
                backgroundImage: `url(${addClothesIcon})`,
                width: "48px",
                height: "48px",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.OOTDcardEditContent}>
        <div className={styles.OOTDcardEditContentMemo}>
          <p className={styles.OOTDcardEditContentMemoTitle}>메모</p>
          <textarea className={styles.OOTDcardEditContentMemoText} />
        </div>
      </div>
      <div className={styles.OOTDcardEditHashTag}>
        <p className={styles.OOTDcardEditContentMemoTitle}>해시태그</p>
        <textarea
          className={styles.OOTDcardEditHashTagText}
          placeholder="#해시태그 입력해주세요"
        />
      </div>
    </div>
  );
};

export const OOTDcardAdd = ({ user }) => {
  const pagination = {
    clickable: true,
    el: `.${styles.customPagination}`,
  };
  const closeClick = () => {
    console.log("Delete");
  };
  const closeminiClick = () => {
    console.log("Delete Mini");
  };
  const addClothClick = () => {
    console.log("clothesAdd");
  };
  return (
    <div className={styles.OOTDcardWrapper}>
      <div className={styles.OOTDcardImageSwiper}>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className={"mySwiper"}
        >
          {DUMMY_ADD.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: "412px",
                  height: "412px",
                  position: "relative",
                }}
              >
                <img
                  onClick={closeClick}
                  src={closeIcon}
                  alt="closeIcon"
                  className={styles.OOTDcardEditCloseBtn}
                />
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div
              onClick={addClothClick}
              style={{
                backgroundImage: `url(${addClothesIcon})`,
                width: "412px",
                height: "412px",
                backgroundSize: "cover",
                // position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className={styles.OOTDcardAddTitle}>이미지 추가 해주세요!</p>
            </div>
          </SwiperSlide>
          <div className={styles.customPagination}></div>
        </Swiper>
      </div>
      <div className={styles.OOTDcardClothes}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          className={styles.mySwiperClothes}
        >
          {DUMMY_ADDCLOTHES.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideCustom}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: "48px",
                  height: "48px",
                  position: "relative",
                }}
              >
                <img
                  onClick={closeminiClick}
                  src={closeIcon}
                  alt="closeIcon"
                  className={styles.OOTDcardEditCloseBtnMini}
                />
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div
              onClick={addClothClick}
              style={{
                backgroundImage: `url(${addClothesIcon})`,
                width: "48px",
                height: "48px",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.OOTDcardEditContent}>
        <div className={styles.OOTDcardEditContentMemo}>
          <p className={styles.OOTDcardEditContentMemoTitle}>메모</p>
          <textarea className={styles.OOTDcardEditContentMemoText} />
        </div>
      </div>
      <div className={styles.OOTDcardEditHashTag}>
        <p className={styles.OOTDcardEditContentMemoTitle}>해시태그</p>
        <textarea
          className={styles.OOTDcardEditHashTagText}
          placeholder="#해시태그 입력해주세요"
        />
      </div>
    </div>
  );
};
