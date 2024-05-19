// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import MyPageBackground from "../components/Background/MyPageBackground.jsx";
import TopBar from "../components/Bar/TopBar.jsx";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #d9d9d9;
`;

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

const StatBox = styled.div``;

function MyPage() {
  return (
    <MyPageBackground>
      <TopBar />
      <ProfileContainer></ProfileContainer>
      <StatContainer>
        <StatBox></StatBox>
      </StatContainer>
    </MyPageBackground>
  );
}

export default MyPage;
