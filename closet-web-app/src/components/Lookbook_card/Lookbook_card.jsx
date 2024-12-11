import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../Lookbook_card/Lookbook_card.module.css";
import lockIcon from "../../assets/icons/Lookbookcard/lockIcon.png";
import unLockIcon from "../../assets/icons/Lookbookcard/unLockIcon.png";
import closeIcon from "../../assets/icons/OOTDcard/Close_Icon.png";
import addClothesIcon from "../../assets/icons/OOTDcard/add_Clothes.png";

const DUMMY_LOOKBOOK = {
  mainImg: "https://picsum.photos/412/412",
  imgList: [
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
    "https://picsum.photos/48/48",
  ],
  memo: "너드 스타일~",
  codyInform: ["체크무늬 셔츠", "검정바지", "구두"],
  hashTag: [
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
    "#OOTD",
  ],
  lock: true,
};
const DUMMY_NEWLOOKBOOK = {
  mainImg: "",
  imgList: [],
  memo: "",
  codyInform: [],
  hashTag: [],
  lock: true,
};

export const Lookbook_card = () => {
  const navigate = useNavigate();
  const clothClick = () => {
    navigate("/clothesDetail");
  };
  const hashClick = () => {
    navigate("/search");
  };

  return (
    <div className={styles.lookbookCardWrapper}>
      <div className={styles.lookbookCardMainImgWrapper}>
        <img
          src={DUMMY_LOOKBOOK.mainImg}
          alt="mainImg"
          className={styles.lookbookCardMainImg}
        />
      </div>
      <div className={styles.lookbookCardClothes}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          className={styles.mySwiperClothes}
        >
          {DUMMY_LOOKBOOK.imgList.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideCustom}>
              <img
                onClick={clothClick}
                className={styles.lookbookCardCloth}
                src={item}
                alt="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.lookbookCardContent}>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>메모</p>
          <p className={styles.lookbookCardMemoContent}>
            {DUMMY_LOOKBOOK.memo}
          </p>
        </div>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>코디정보</p>
          <p className={styles.lookbookCardMemoContent}>
            {DUMMY_LOOKBOOK.codyInform.join(", ")}
          </p>
        </div>
        <div className={styles.lookbookCardContentHashTag}>
          <p className={styles.lookbookCardMemoTitle}>해시태그</p>
          <div className={styles.lookbookCardHashTagContent}>
            {DUMMY_LOOKBOOK.hashTag.map((item, index) => (
              <p
                onClick={hashClick}
                key={index}
                className={styles.lookbookCardHashTag}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>공개여부</p>
          <div className={styles.lookbookCardLockContent}>
            {DUMMY_LOOKBOOK.lock ? (
              <img
                src={lockIcon}
                alt="lockIcon"
                className={styles.lookbookCardLockIcon}
              />
            ) : (
              <img
                src={unLockIcon}
                alt="unlockIcon"
                className={styles.lookbookCardLockIcon}
              />
            )}
            {DUMMY_LOOKBOOK.lock ? (
              <p className={styles.lookbookCardMemoContent}>비공개</p>
            ) : (
              <p className={styles.lookbookCardMemoContent}>공개</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lookbook_card_Edit = () => {
  const [lockState, setLockState] = useState();
  const clothClick = () => {
    console.log("clothDetail move");
  };
  const hashClick = () => {
    console.log("hashTag Click");
  };
  const closeBtn = () => {
    console.log("close");
  };
  const closeminiBtn = () => {
    console.log("close");
  };
  const addClothClick = () => {
    console.log("cloth add");
  };
  const lockEdit = () => {
    setLockState(!lockState);
  };

  useEffect(() => {
    setLockState(DUMMY_LOOKBOOK.lock);
  }, []);

  return (
    <div className={styles.lookbookCardWrapper}>
      <div className={styles.lookbookCardMainImgWrapper}>
        <div
          style={{
            backgroundImage: `url(${
              DUMMY_LOOKBOOK.mainImg ? DUMMY_LOOKBOOK.mainImg : addClothesIcon
            })`,
            width: "412px",
            height: "412px",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            onClick={closeBtn}
            src={closeIcon}
            alt="closebtn"
            className={styles.lookBookcardEditCloseBtn}
          />
        </div>
      </div>
      <div className={styles.lookbookCardClothes}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          className={styles.mySwiperClothes}
        >
          {DUMMY_LOOKBOOK.imgList.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideCustom}>
              <div
                style={{
                  backgroundImage: `url(${item})`,
                  width: "48px",
                  height: "48px",
                  position: "relative",
                }}
              >
                <img
                  onClick={closeminiBtn}
                  src={closeIcon}
                  alt="closeIcon"
                  className={styles.lookBookcardEditCloseBtnMini}
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
      <div className={styles.lookbookCardContent}>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>메모</p>
          <input
            type="text"
            placeholder={DUMMY_LOOKBOOK.memo}
            className={styles.lookbookCardInput}
          />
        </div>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>코디정보</p>
          <input
            type="text"
            placeholder={DUMMY_LOOKBOOK.codyInform.join(", ")}
            className={styles.lookbookCardInput}
          />
        </div>
        <div className={styles.lookbookCardContentHashTag}>
          <p className={styles.lookbookCardMemoTitle}>해시태그</p>
          <div className={styles.lookbookCardHashTagContent}>
            <textarea
              placeholder={DUMMY_LOOKBOOK.hashTag.join(" ")}
              className={styles.lookbookCardInputHashTag}
            />
          </div>
        </div>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>공개여부</p>
          <div onClick={lockEdit} className={styles.lookbookCardLockContent}>
            {lockState ? (
              <img
                src={lockIcon}
                alt="lockIcon"
                className={styles.lookbookCardLockIconEdit}
              />
            ) : (
              <img
                src={unLockIcon}
                alt="unlockIcon"
                className={styles.lookbookCardLockIconEdit}
              />
            )}
            {lockState ? (
              <p className={styles.lookbookCardMemoContentEdit}>비공개</p>
            ) : (
              <p className={styles.lookbookCardMemoContentEdit}>공개</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lookbook_card_Add = () => {
  const [lockState, setLockState] = useState();
  const clothClick = () => {
    console.log("clothDetail move");
  };
  const hashClick = () => {
    console.log("hashTag Click");
  };
  const closeBtn = () => {
    console.log("close");
  };
  const closeminiBtn = () => {
    console.log("close");
  };
  const addClothClick = () => {
    console.log("cloth add");
  };
  const lockEdit = () => {
    setLockState(!lockState);
  };

  useEffect(() => {
    setLockState(DUMMY_NEWLOOKBOOK.lock);
  }, []);

  return (
    <div className={styles.lookbookCardWrapper}>
      <div className={styles.lookbookCardMainImgWrapper}>
        <div
          style={{
            backgroundImage: `url(${
              DUMMY_NEWLOOKBOOK.mainImg
                ? DUMMY_LOOKBOOK.mainImg
                : addClothesIcon
            })`,
            width: "412px",
            height: "412px",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            onClick={closeBtn}
            src={closeIcon}
            alt="closebtn"
            className={styles.lookBookcardEditCloseBtn}
          />
        </div>
      </div>
      <div className={styles.lookbookCardClothes}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          className={styles.mySwiperClothes}
        >
          {DUMMY_NEWLOOKBOOK.imgList.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideCustom}>
              <div
                style={{
                  backgroundImage: `url(${item})`,
                  width: "48px",
                  height: "48px",
                  position: "relative",
                }}
              >
                <img
                  onClick={closeminiBtn}
                  src={closeIcon}
                  alt="closeIcon"
                  className={styles.lookBookcardEditCloseBtnMini}
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
      <div className={styles.lookbookCardContent}>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>메모</p>
          <input
            type="text"
            placeholder={DUMMY_NEWLOOKBOOK.memo}
            className={styles.lookbookCardInput}
          />
        </div>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>코디정보</p>
          <input
            type="text"
            placeholder={DUMMY_NEWLOOKBOOK.codyInform.join(", ")}
            className={styles.lookbookCardInput}
          />
        </div>
        <div className={styles.lookbookCardContentHashTag}>
          <p className={styles.lookbookCardMemoTitle}>해시태그</p>
          <div className={styles.lookbookCardHashTagContent}>
            <textarea
              placeholder={DUMMY_NEWLOOKBOOK.hashTag.join(" ")}
              className={styles.lookbookCardInputHashTag}
            />
          </div>
        </div>
        <div className={styles.lookbookCardContentMemo}>
          <p className={styles.lookbookCardMemoTitle}>공개여부</p>
          <div onClick={lockEdit} className={styles.lookbookCardLockContent}>
            {lockState ? (
              <img
                src={lockIcon}
                alt="lockIcon"
                className={styles.lookbookCardLockIconEdit}
              />
            ) : (
              <img
                src={unLockIcon}
                alt="unlockIcon"
                className={styles.lookbookCardLockIconEdit}
              />
            )}
            {lockState ? (
              <p className={styles.lookbookCardMemoContentEdit}>비공개</p>
            ) : (
              <p className={styles.lookbookCardMemoContentEdit}>공개</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
