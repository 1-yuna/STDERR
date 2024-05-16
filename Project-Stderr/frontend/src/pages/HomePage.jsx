// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import SignupBar from "../components/Bar/SignupBar.jsx";
import Post from "../components/Post/Post.jsx";

function HomePage() {
  return (
    <Background>
      <TopBar />
      <SignupBar />
      <Post />
    </Background>
  );
}

export default HomePage;
