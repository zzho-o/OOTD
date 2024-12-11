import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ComponentTest from "./pages/ComponentTest.js";
import ApiTestPage from "./supabase/apiTestPage.js";
import ImgApiTestPage from "./supabase/imgApiTestPage.js";
import LookbookDetal from "./pages/LookbookDetail/LookbookDetail.jsx";
import LookbookEdit from "./pages/LookbookEdit/LookbookEdit.jsx";
import LookbookAdd from "./pages/LookbookAdd/LookbookAdd.jsx";
import ProfileEdit from "./pages/Profile/ProfileEdit.jsx";
import ProfileMine from "./pages/Profile/ProfileMine.jsx";
import ProfileFollow from "./pages/Profile/ProfileFollow.jsx";
import ClothesDetail from "./pages/Clothes/ClothesDetail";
import ClothesEdit from "./pages/Clothes/ClothesEdit";
import ClothesAdd from "./pages/Clothes/ClothesAdd.jsx";
import ClothesImgAdd from "./pages/Clothes/ClothesImgAdd";
import Feed from "./pages/Feed/Feed.jsx";
import FeedDetail from "./pages/Feed/FeedDetail.jsx";
import FeedEdit from "./pages/Feed/FeedEdit.jsx";
import FeedAdd from "./pages/Feed/FeedAdd.jsx";
import ProfileUser from "./pages/Profile/ProfileUser.jsx";
import Setting from "./pages/SettingPage/Setting.jsx";
import Alarm from "./pages/AlarmPage/Alarm.jsx";
import Search from "./pages/SearchPage/Search.jsx";
import Closet from "./pages/Closet/Closet.jsx";
import ClosetDetail from "./pages/ClosetDetail/ClosetDetail.jsx";
import LookbookImgAdd from "./pages/LookbookImgAdd/LookbookImgAdd.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ComponentTest" element={<ComponentTest />} />
          <Route path="/api-test" element={<ApiTestPage />} />
          <Route path="/api-test-img" element={<ImgApiTestPage />} />
          <Route path="/LookbookDetail" element={<LookbookDetal />} />
          <Route path="/LookbookEdit" element={<LookbookEdit />} />
          <Route path="/LookbookAdd" element={<LookbookAdd />} />
          <Route path="/LookbookImgAdd" element={<LookbookImgAdd />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/profileMine" element={<ProfileMine />} />
          <Route path="/profileFollow" element={<ProfileFollow />} />
          <Route path="/profileUser" element={<ProfileUser />} />
          <Route path="/clothesDetail" element={<ClothesDetail />} />
          <Route path="/clothesEdit" element={<ClothesEdit />} />
          <Route path="/clothesAdd" element={<ClothesAdd />} />
          <Route path="/clothesImgAdd" element={<ClothesImgAdd />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/detail" element={<FeedDetail />} />
          <Route path="/feed/edit" element={<FeedEdit />} />
          <Route path="/feed/add" element={<FeedAdd />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/search" element={<Search />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/closetDetail" element={<ClosetDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
