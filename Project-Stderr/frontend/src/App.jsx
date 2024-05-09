// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import HomePage from "./pages/HomePage.jsx"; // 홈페이지 (로그인)
import BoardPage from "./pages/BoardPage.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import ReplyPage from "./pages/ReplyPage.jsx";
import ViewPage from "./pages/ViewPage.jsx";
import MyPage from "./pages/MyPage.jsx";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/reply" element={<ReplyPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/my" element={<MyPage />} />
          {/*path="/board/:category_id"*/}
          {/*path="/reply/:category_id/:question_id"*/}
          {/*path="/view/:category_id/:question_id"*/}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
