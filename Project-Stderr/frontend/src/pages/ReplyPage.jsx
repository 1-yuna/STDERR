// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import ViewTitle from "../components/View/ViewTitle.jsx";
import Question from "../components/View/Question.jsx";
import ViewCode from "../components/View/ViewCode.jsx";
import WriteComment from "../components/Write/WriteComment.jsx";
import WriteCode from "../components/Write/WriteCode.jsx";
import PostBtn from "../components/Write/PostBtn.jsx";

function ReplyPage() {
  return (
    <Background>
      <TopBar isBackBtn={true} />
      <ViewTitle title="Kotlin 회원가입 기능" />
      <Question heart={false} />
      <ViewCode />
      <WriteComment />
      <WriteCode />
      <PostBtn name="Reply" route="before" />
    </Background>
  );
}

export default ReplyPage;
