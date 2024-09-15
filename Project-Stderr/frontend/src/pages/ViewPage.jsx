// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import Question from "../components/View/Question.jsx";
import ViewCode from "../components/View/ViewCode.jsx";
import ViewTitle from "../components/View/ViewTitle.jsx";
import PostBtn from "../components/Write/PostBtn.jsx";
import Reply from "../components/View/Reply.jsx";

function ViewPage() {
  return (
    <Background>
      <TopBar isBackBtn={true} />
      <ViewTitle title="Kotlin 회원가입 기능" />
      <Question heart={true} />
      <ViewCode />
      <PostBtn name="Reply" route="replyPage" />
      <Reply />
    </Background>
  );
}

export default ViewPage;
