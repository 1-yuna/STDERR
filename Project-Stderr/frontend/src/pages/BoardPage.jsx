// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import Post from "../components/Post/Post.jsx";

function BoardPage() {
  return (
    <Background>
      <TopBar></TopBar>
      <Post>Board</Post>
    </Background>
  );
}

export default BoardPage;
