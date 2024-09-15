// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/common/Background";
import TopBar from "../components/common/Bar/TopBar.jsx";
import ViewTitle from "../components/common/View/ViewTitle.jsx";
import Question from "../components/common/View/Question.jsx";
import ViewCode from "../components/common/View/ViewCode.jsx";
import WriteComment from "../components/common/Write/WriteComment.jsx";
import WriteCode from "../components/common/Write/WriteCode.jsx";
import PostBtn from "../components/common/Write/PostBtn.jsx";

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
