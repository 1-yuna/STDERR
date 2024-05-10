// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import Question from "../components/ContentElements/Question.jsx";
import Code from "../components/ContentElements/Code.jsx";
import TitleTag from "../components/ContentElements/TitleTag.jsx";

function HomePage() {
  return (
    <Background>
      <Question />
      <Code />
      <TitleTag name="Title" />
      <TitleTag name="Tags" />
    </Background>
  );
}

export default HomePage;
