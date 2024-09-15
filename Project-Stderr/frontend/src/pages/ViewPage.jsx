// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/common/Background";
import TopBar from "../components/common/Bar/TopBar.jsx";
import Question from "../components/common/View/Question.jsx";
import ViewCode from "../components/common/View/ViewCode.jsx";
import ViewTitle from "../components/common/View/ViewTitle.jsx";
import PostBtn from "../components/common/Write/PostBtn.jsx";
import Reply from "../components/common/View/Reply.jsx";

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
