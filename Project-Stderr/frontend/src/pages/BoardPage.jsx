// eslint-disable-next-line no-unused-vars
import React from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import Post from "../components/View/Post.jsx";
import styled from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5px;
`;
const Questions = styled.div`
  display: flex;
  font-size: 13px;
`;

const Category = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

function BoardPage() {
  const count = 2;
  return (
    <Background>
      <CategoryBox>
        <Questions>{count} questions</Questions>
        <Category> Java / Kotlin </Category>
      </CategoryBox>
      <TopBar></TopBar>
      <Post first={true}></Post>
      <Post></Post>
    </Background>
  );
}

export default BoardPage;
