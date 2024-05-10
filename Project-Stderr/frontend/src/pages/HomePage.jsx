// eslint-disable-next-line no-unused-vars
import React from "react";
import Question from "../components/ContentElements/Question.jsx";
import Code from "../components/ContentElements/Code.jsx";
import Background from "../components/Background";

function HomePage() {
  return (
    <Background>
      <Question />
      <Code />
    </Background>
  );
}

export default HomePage;
