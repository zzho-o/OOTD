import React, { useState, useEffect } from "react";
import styles from "../ClothDetail_card/ClothDetail_card.module.css";
import downIcon from "../../assets/icons/ClothDetail_card/downIcon.png";
import upIcon from "../../assets/icons/ClothDetail_card/upIcon.png";
import closeIcon from "../../assets/icons/OOTDcard/Close_Icon.png";
import DropdownButton from "../DropdownButton/DropdownButton";
const DUMMY_CLOTH = {
  clothImg: "https://atimg.sonyunara.com/files/attrangs/goods/161867/66e0332c28fcb.jpg",
  closet: "전체 옷장",
  category: "상의",
  season: "summer",
  brand: "nike",
  size: "32",
  url: "",
  memo: "",
  hashTag: [],
};
// const DUMMY_CLOTH = {
//   clothImg: "https://atimg.sonyunara.com/files/attrangs/goods/145025/65b0df79e483a.jpg",
//   closet: "전체 옷장",
//   category: "상의",
//   season: "summer",
//   brand: "아디다스",
//   size: "L",
//   url: "www.naver.com",
//   memo: "너드 스타일~",
//   hashTag: ["#OOTD", "#OOTD", "#OOTD", "#OOTD", "#OOTD", "#OOTD", "#OOTD"],
// };

export const ClothDetail_card = () => {
  const [selectInformBtn, setSelectInformBtn] = useState(true);
  const [addInformBtn, setaddInformBtn] = useState(true);

  const selectInformBtnClick = () => {
    setSelectInformBtn(!selectInformBtn);
  };
  const addInformBtnClick = () => {
    setaddInformBtn(!addInformBtn);
  };

  useEffect(() => {}, [selectInformBtn, addInformBtn]);
  return (
    <div className={styles.ClothDeatilCardWrapper}>
      <div className={styles.ClothDeatilCardImgContent}>
        <img
          src={DUMMY_CLOTH.clothImg}
          alt="clothImg"
          className={styles.ClothDeatilCardImg}
        />
      </div>
      <div className={styles.ClothDeatilCardContent}>
        <div className={styles.ClothDeatilCardContentCloset}>
          <p className={styles.ClothDeatilCardContentClosetTitle}>옷장</p>
          <p className={styles.ClothDeatilCardContentClosetName}>
            {DUMMY_CLOTH.closet}
          </p>
        </div>
        <div className={styles.ClothDeatilCardContentCloset}>
          <p className={styles.ClothDeatilCardContentClosetTitle}>카테고리</p>
          <p className={styles.ClothDeatilCardContentClosetName}>
            {DUMMY_CLOTH.category}
          </p>
        </div>
        <div
          onClick={selectInformBtnClick}
          className={styles.ClothDeatilCardContentCloset}
        >
          <p className={styles.ClothDeatilCardContentClosetTitle}>선택 정보</p>
          {selectInformBtn ? (
            <img
              src={upIcon}
              alt="upIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          ) : (
            <img
              src={downIcon}
              alt="downIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          )}
        </div>
        {selectInformBtn && (
          <div className={styles.ClothDeatilCardSelectContent}>
            <div className={styles.ClothDeatilCardSelectContentSeason}>
              <p className={styles.ClothDeatilCardSelectContentTitle}>계절</p>
              <div className={styles.ClothDeatilCardSelectContentSeasonInforms}>
                <div
                  className={
                    DUMMY_CLOTH.season === "spring"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  봄
                </div>
                <div
                  className={
                    DUMMY_CLOTH.season === "summer"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  여름
                </div>
                <div
                  className={
                    DUMMY_CLOTH.season === "fall"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  가을
                </div>
                <div
                  className={
                    DUMMY_CLOTH.season === "winter"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  겨울
                </div>
              </div>
            </div>
            <div className={styles.ClothDeatilCardSelectContents}>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  브랜드
                </p>
                <p className={styles.ClothDeatilCardSelectContentBrandName}>
                  {DUMMY_CLOTH.brand}
                </p>
              </div>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  사이즈
                </p>
                <p className={styles.ClothDeatilCardSelectContentBrandName}>
                  {DUMMY_CLOTH.size}
                </p>
              </div>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  url
                </p>
                <p className={styles.ClothDeatilCardSelectContentBrandName}>
                  {DUMMY_CLOTH.url}
                </p>
              </div>
            </div>
          </div>
        )}
        <div
          onClick={addInformBtnClick}
          className={styles.ClothDeatilCardContentCloset}
        >
          <p className={styles.ClothDeatilCardContentClosetTitle}>추가정보</p>
          {addInformBtn ? (
            <img
              src={upIcon}
              alt="upIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          ) : (
            <img
              src={downIcon}
              alt="downIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          )}
        </div>
        {addInformBtn && (
          <div className={styles.ClothDeatilCardAddInform}>
            <div className={styles.ClothDeatilCardSelectContentBrand}>
              <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                메모
              </p>
              <p className={styles.ClothDeatilCardSelectContentBrandName}>
                {DUMMY_CLOTH.memo}
              </p>
            </div>
            <div className={styles.ClothDeatilCardSelectContentBrand}>
              <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                해시태그
              </p>
              <p className={styles.ClothDeatilCardAddInformHashTag}>
                {DUMMY_CLOTH.hashTag.join(" ")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ClothDetail_card_Edit = () => {
  const [selectInformBtn, setSelectInformBtn] = useState(true);
  const [addInformBtn, setaddInformBtn] = useState(true);
  const [seasonData, setSeasonData] = useState(DUMMY_CLOTH.season);
  const [brandData, setBrandData] = useState(DUMMY_CLOTH.brand);
  const [sizeData, setSizeData] = useState(DUMMY_CLOTH.size);
  const [urlData, setUrlData] = useState(DUMMY_CLOTH.url);
  const [memoData, setMemoData] = useState(DUMMY_CLOTH.memo);
  const [hashTagData, setHashTagData] = useState(DUMMY_CLOTH.hashTag);

  const selectInformBtnClick = () => {
    setSelectInformBtn(!selectInformBtn);
  };
  const addInformBtnClick = () => {
    setaddInformBtn(!addInformBtn);
  };
  const seasonClick = selectSeason => {
    setSeasonData(selectSeason);
  };
  const closeBtn = () => {
    console.log("close");
  };

  useEffect(() => {}, [selectInformBtn, addInformBtn, seasonData]);
  return (
    <div className={styles.ClothDeatilCardWrapper}>
      <div className={styles.ClothDeatilCardImgContent}>
        {DUMMY_CLOTH.clothImg ? (
          <div
            style={{
              backgroundImage: `url(${DUMMY_CLOTH.clothImg})`,
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
              className={styles.ClothDetailCardEditCloseBtn}
            />
          </div>
        ) : (
          <div
            style={{
              width: "412px",
              height: "412px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            이미지를 추가해주세요
          </div>
        )}
      </div>
      <div className={styles.ClothDeatilCardContent}>
        <div className={styles.ClothDeatilCardContentCloset}>
          <p className={styles.ClothDeatilCardContentClosetTitle}>옷장</p>
          <DropdownButton
            itemList={["전체 옷장", "여름 옷"]}
            firstData={DUMMY_CLOTH.closet}
          />
        </div>
        <div className={styles.ClothDeatilCardContentCloset}>
          <p className={styles.ClothDeatilCardContentClosetTitle}>카테고리</p>
          <DropdownButton
            itemList={[
              "전체",
              "아우터",
              "상의",
              "원피스/점프스투",
              "하의",
              "신발",
              "악세서리",
            ]}
            firstData={DUMMY_CLOTH.category}
          />
        </div>
        <div
          onClick={selectInformBtnClick}
          className={styles.ClothDeatilCardContentCloset}
        >
          <p className={styles.ClothDeatilCardContentClosetTitle}>선택 정보</p>
          {selectInformBtn ? (
            <img
              src={upIcon}
              alt="upIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          ) : (
            <img
              src={downIcon}
              alt="downIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          )}
        </div>
        {selectInformBtn && (
          <div className={styles.ClothDeatilCardSelectContent}>
            <div className={styles.ClothDeatilCardSelectContentSeason}>
              <p className={styles.ClothDeatilCardSelectContentTitle}>계절</p>
              <div className={styles.ClothDeatilCardSelectContentSeasonInforms}>
                <div
                  onClick={() => seasonClick("spring")}
                  className={
                    seasonData === "spring"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  봄
                </div>
                <div
                  onClick={() => seasonClick("summer")}
                  className={
                    seasonData === "summer"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  여름
                </div>
                <div
                  onClick={() => seasonClick("fall")}
                  className={
                    seasonData === "fall"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  가을
                </div>
                <div
                  onClick={() => seasonClick("winter")}
                  className={
                    seasonData === "winter"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  겨울
                </div>
              </div>
            </div>
            <div className={styles.ClothDeatilCardSelectContents}>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  브랜드
                </p>
                <input
                  onChange={e => setBrandData(e.value)}
                  value={brandData}
                  className={styles.ClothDetailCardEditInput}
                  //   placeholder={brandData}
                />
              </div>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  사이즈
                </p>
                <input
                  onChange={e => setSizeData(e.value)}
                  value={sizeData}
                  className={styles.ClothDetailCardEditInput}
                  //   placeholder={sizeData}
                />
              </div>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  url
                </p>
                <input
                  onChange={e => setUrlData(e.value)}
                  value={urlData}
                  className={styles.ClothDetailCardEditInput}
                  //   placeholder={urlData}
                />
              </div>
            </div>
          </div>
        )}
        <div
          onClick={addInformBtnClick}
          className={styles.ClothDeatilCardContentCloset}
        >
          <p className={styles.ClothDeatilCardContentClosetTitle}>추가정보</p>
          {addInformBtn ? (
            <img
              src={upIcon}
              alt="upIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          ) : (
            <img
              src={downIcon}
              alt="downIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          )}
        </div>
        {addInformBtn && (
          <div className={styles.ClothDeatilCardAddInform}>
            <div className={styles.ClothDeatilCardSelectContentBrand}>
              <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                메모
              </p>
              <input
                onChange={e => setMemoData(e.value)}
                value={memoData}
                className={styles.ClothDetailCardEditInput}
                //   placeholder={memoData}
              />
            </div>
            <div className={styles.ClothDeatilCardSelectContentBrand}>
              <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                해시태그
              </p>
              <textarea
                onChange={e => setHashTagData(e.value)}
                value={hashTagData}
                className={styles.ClothDetailCardEditTextArea}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ClothDetail_card_Add = () => {
  const [selectInformBtn, setSelectInformBtn] = useState(true);
  const [addInformBtn, setaddInformBtn] = useState(true);
  const [clothImg, setClothImg] = useState();
  const [seasonData, setSeasonData] = useState("spring");
  const [brandData, setBrandData] = useState();
  const [sizeData, setSizeData] = useState();
  const [urlData, setUrlData] = useState();
  const [memoData, setMemoData] = useState();
  const [hashTagData, setHashTagData] = useState();

  const selectInformBtnClick = () => {
    setSelectInformBtn(!selectInformBtn);
  };
  const addInformBtnClick = () => {
    setaddInformBtn(!addInformBtn);
  };
  const seasonClick = selectSeason => {
    setSeasonData(selectSeason);
  };
  const closeBtn = () => {
    console.log("close");
  };

  useEffect(() => {}, [selectInformBtn, addInformBtn, seasonData]);
  return (
    <div className={styles.ClothDeatilCardWrapper}>
      <div className={styles.ClothDeatilCardImgContent}>
        {clothImg ? (
          <div
            style={{
              backgroundImage: `url(${clothImg})`,
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
              className={styles.ClothDetailCardEditCloseBtn}
            />
          </div>
        ) : (
          // <div
          //   style={{
          //     width: "412px",
          //     height: "412px",
          //     display: "flex",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     fontSize: "30px",
          //   }}
          // >
          //   이미지를 추가해주세요
          // </div>
          <img src="https://atimg.sonyunara.com/files/attrangs/goods/161867/66e0332c28fcb.jpg" />
        )}
      </div>
      <div className={styles.ClothDeatilCardContent}>
        <div className={styles.ClothDeatilCardContentCloset}>
          <p className={styles.ClothDeatilCardContentClosetTitle}>옷장</p>
          <DropdownButton
            itemList={["전체 옷장", "여름 옷"]}
            firstData={DUMMY_CLOTH.closet}
          />
        </div>
        <div className={styles.ClothDeatilCardContentCloset}>
          <p className={styles.ClothDeatilCardContentClosetTitle}>카테고리</p>
          <DropdownButton
            itemList={[
              "전체",
              "아우터",
              "상의",
              "원피스/점프스투",
              "하의",
              "신발",
              "악세서리",
            ]}
            firstData={DUMMY_CLOTH.category}
          />
        </div>
        <div
          onClick={selectInformBtnClick}
          className={styles.ClothDeatilCardContentCloset}
        >
          <p className={styles.ClothDeatilCardContentClosetTitle}>선택 정보</p>
          {selectInformBtn ? (
            <img
              src={upIcon}
              alt="upIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          ) : (
            <img
              src={downIcon}
              alt="downIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          )}
        </div>
        {selectInformBtn && (
          <div className={styles.ClothDeatilCardSelectContent}>
            <div className={styles.ClothDeatilCardSelectContentSeason}>
              <p className={styles.ClothDeatilCardSelectContentTitle}>계절</p>
              <div className={styles.ClothDeatilCardSelectContentSeasonInforms}>
                <div
                  onClick={() => seasonClick("spring")}
                  className={
                    seasonData === "spring"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  봄
                </div>
                <div
                  onClick={() => seasonClick("summer")}
                  className={
                    seasonData === "summer"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  여름
                </div>
                <div
                  onClick={() => seasonClick("fall")}
                  className={
                    seasonData === "fall"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  가을
                </div>
                <div
                  onClick={() => seasonClick("winter")}
                  className={
                    seasonData === "winter"
                      ? styles.ClothDeatilCardSelectContentSeasonInformCheck
                      : styles.ClothDeatilCardSelectContentSeasonInform
                  }
                >
                  겨울
                </div>
              </div>
            </div>
            <div className={styles.ClothDeatilCardSelectContents}>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  브랜드
                </p>
                <input
                  onChange={e => setBrandData(e.value)}
                  value={brandData}
                  className={styles.ClothDetailCardEditInput}
                  //   placeholder={brandData}
                />
              </div>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  사이즈
                </p>
                <input
                  onChange={e => setSizeData(e.value)}
                  value={sizeData}
                  className={styles.ClothDetailCardEditInput}
                  //   placeholder={sizeData}
                />
              </div>
              <div className={styles.ClothDeatilCardSelectContentBrand}>
                <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                  url
                </p>
                <input
                  onChange={e => setUrlData(e.value)}
                  value={urlData}
                  className={styles.ClothDetailCardEditInput}
                  //   placeholder={urlData}
                />
              </div>
            </div>
          </div>
        )}
        <div
          onClick={addInformBtnClick}
          className={styles.ClothDeatilCardContentCloset}
        >
          <p className={styles.ClothDeatilCardContentClosetTitle}>추가정보</p>
          {addInformBtn ? (
            <img
              src={upIcon}
              alt="upIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          ) : (
            <img
              src={downIcon}
              alt="downIcon"
              className={styles.ClothDeatilCardContentBtnIcon}
            />
          )}
        </div>
        {addInformBtn && (
          <div className={styles.ClothDeatilCardAddInform}>
            <div className={styles.ClothDeatilCardSelectContentBrand}>
              <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                메모
              </p>
              <input
                onChange={e => setMemoData(e.value)}
                value={memoData}
                className={styles.ClothDetailCardEditInput}
                //   placeholder={memoData}
              />
            </div>
            <div className={styles.ClothDeatilCardSelectContentBrand}>
              <p className={styles.ClothDeatilCardSelectContentBrandTitle}>
                해시태그
              </p>
              <textarea
                onChange={e => setHashTagData(e.value)}
                value={hashTagData}
                className={styles.ClothDetailCardEditTextArea}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
