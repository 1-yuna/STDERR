// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import MyPageBackground from "../components/Background/MyPageBackground.jsx";
import TopBar from "../components/Bar/TopBar.jsx";
import { GoCopilot } from "react-icons/go";
import { MdOutlineEngineering } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";

const GradeSymbolAI = styled(GoCopilot)`
  font-size: 30px;

  @media (max-width: 1070px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const GradeSymbolEngineer = styled(MdOutlineEngineering)`
  font-size: 30px;

  @media (max-width: 1070px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const GradeSymbolJr = styled(TbMoodKid)`
  font-size: 30px;

  @media (max-width: 1070px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const DivBox2 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  height: 100%;
  padding-top: 46px;
`;

const EditButton = styled.button`
  width: 50%;
  height: 40px;
  text-align: center;
  color: #8145cd;
  border-radius: 15px;
  border: 2px solid #8145cd;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: #8145cd;
    color: #ffffff;
    border-color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const DivBox1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  align-items: center;
`;

const ProfileCir = styled.button`
  width: 130px;
  height: 130px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 60%;

  @media (max-width: 1070px) {
    padding-left: 10px;
  }
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 900;

  @media (max-width: 1070px) {
    font-size: 20px;
  }
`;

const NotName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: 40px;
`;

const Oneliner = styled.div`
  white-space: nowrap;
  font-size: 15px;
  color: #b4b4b4;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35%;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;
  padding: 0 10%;

  @media (max-width: 768px) {
    padding: 0 0;
  }
`;

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 65%;
  align-items: center;
`;

const DivBox3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32%;
  height: 100%;
`;

const BoxName = styled.div`
  width: fit-content;
  height: 40px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding-left: 20px;
`;

const StatBox = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
`;

const ScoreBox = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 50%;
`;

const ScoreType = styled.div`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Score = styled.div`
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const DivBox4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 64%;
  height: 100%;
`;

const DivBox5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70%;
`;

const AboutBox = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 30px;
  background-color: #e4e4e4;
`;

const DivBox6 = styled.div`
  width: 100%;
  height: 50%;
`;

const RatingBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 70%;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  align-items: center;
  padding-left: 5%;
`;

const RankStd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  height: 50px;
  padding-left: 10px;

  @media (max-width: 1070px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

function MyPage() {
  return (
    <MyPageBackground>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile</title>
      </Helmet>
      <TopBar />
      <ProfileContainer>
        <DivBox1>
          <ProfileCir />
          <InfoBox>
            <Name>hiya</Name>
            <NotName>
              <Oneliner>kotlin, app engineer</Oneliner>
              <GradeSymbolAI size={16} />
            </NotName>
          </InfoBox>
        </DivBox1>
        <DivBox2>
          <EditButton>Edit</EditButton>
        </DivBox2>
      </ProfileContainer>
      <StatContainer>
        <DivBox3>
          <BoxName>Stats</BoxName>
          <StatBox>
            <ScoreBox>
              <ScoreType>questions</ScoreType>
              <Score>1</Score>
            </ScoreBox>
            <ScoreBox>
              <ScoreType>reputation</ScoreType>
              <Score>100</Score>
            </ScoreBox>
            <ScoreBox>
              <ScoreType>answers</ScoreType>
              <Score>1</Score>
            </ScoreBox>
            <ScoreBox>
              <ScoreType>visited</ScoreType>
              <Score>1</Score>
            </ScoreBox>
          </StatBox>
        </DivBox3>
        <DivBox4>
          <BoxName>About</BoxName>
          <DivBox5>
            <AboutBox></AboutBox>
            <DivBox6>
              <BoxName>Rating</BoxName>
              <RatingBox>
                <GradeSymbolAI />
                <RankStd>rep. or ans. 100 up</RankStd>
                <GradeSymbolEngineer />
                <RankStd>rep. or ans. 30 up</RankStd>
                <GradeSymbolJr />
                <RankStd>rep. or ans. 10 up</RankStd>
              </RatingBox>
            </DivBox6>
          </DivBox5>
        </DivBox4>
      </StatContainer>
    </MyPageBackground>
  );
}

export default MyPage;
