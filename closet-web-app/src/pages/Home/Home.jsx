import React from "react";
import Monthtopcard from "../../components/Monthtopcard/Monthtopcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Home/Home.module.css";
import useUserProfile from "../../api/GetSession";
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
  { userId: "@cristiano", instaId: "cristiano", img: feed1 },
  { userId: "@leomessi", instaId: "leomessi", img: feed2 },
  { userId: "@selenagomez", instaId: "selenagomez", img: feed3 },
  { userId: "@kyliejenner", instaId: "kyliejenner", img: feed4 },
  { userId: "@therock", instaId: "therock", img: feed5 },
  { userId: "@arianagrande", instaId: "arianagrande", img: feed6 },
  { userId: "@kimkardashian", instaId: "kimkardashian", img: feed7 },
  { userId: "@beyonce", instaId: "beyonce", img: feed8 },
  { userId: "@khloekardashian", instaId: "khloekardashian", img: feed9 },
  { userId: "@justinbieber", instaId: "justinbieber", img: feed10 },
];

const Home = () => {
  useUserProfile();
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className={"mySwiper"}
    >
      {DUMMY_DATA.map((item, index) => (
        <SwiperSlide key={index}>
          <Monthtopcard
            topNum={index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
            userId={item.userId}
            instaId={item.instaId}
            img={item.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
