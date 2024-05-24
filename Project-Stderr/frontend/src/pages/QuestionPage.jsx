// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import Dropdown from "../components/Dropdown/index.jsx";
import styled from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import TitleTag from "../components/ContentElements/TitleTag.jsx";
import Comment from "../components/ContentElements/Comment.jsx";
import Code from "../components/ContentElements/Code.jsx";
import Question from "../components/ContentElements/Question.jsx";
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 20px;
  color: #5a5a5a;
`;

const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  //width: 150px;
  //background-color: #e7e7e7;
  //border-radius: 10px;
  //height: 35px;
  //font-weight: bold;
`;

const DropDownBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e7e7e7;
  border-radius: 5px;
  height: 35px;
  font-weight: bold;
  box-shadow: 1px 1px 1px #b3b3b3;
  cursor: pointer;
  padding: 0 5px 0 20px;
`;

const RuleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;

const RuleTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 0 0 20px 15px;
`;

const RuleText = styled.div`
  font-size: 16px;
  line-height: 2.5; /* 줄 간격 조정 */
  white-space: pre-wrap;
`;

function QuestionPage() {
  const [view, setView] = useState(false); //드롭다운
  const [selectedOption, setSelectedOption] = useState(""); // 선택된 option

  const str =
    " 1. 문제 상황(제목)을 한 줄로 요약하기! \n 2. 문제에 대해 자세히 서술해주세요!\n 3. 본인이 하고자하는 바가 무엇인지도 서술해주세요! \n 4. 문제 상황과 관련있는 태그를 추가해주세요! \n 5. 글 올리기! \n";
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setView(false); //드롭다운 닫기
  };
  return (
    <Background>
      <TopBar isBackBtn={true} />
      <TopBox>
        <QuestionBox>Ask a question</QuestionBox>
        <DropDownBox
          onClick={() => {
            setView(!view);
          }}
        >
          <DropDownBtn>
            {selectedOption || "Java / Kotlin"}
            {view ? (
              <MdOutlineArrowDropUp size={30} />
            ) : (
              <MdOutlineArrowDropDown size={30} />
            )}
          </DropDownBtn>
          {view && <Dropdown onSelect={handleOptionChange} />}
        </DropDownBox>
      </TopBox>
      <RuleBox>
        <RuleTitle>Step</RuleTitle>
        <RuleText>{str}</RuleText>
      </RuleBox>
      <TitleTag name="Title" />
      <Comment />
      <Code dropBtn="dropBtn" />
      <TitleTag name="Tag" />
    </Background>
  );
}

export default QuestionPage;
