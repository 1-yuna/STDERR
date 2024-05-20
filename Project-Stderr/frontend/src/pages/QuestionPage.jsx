// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Background from "../components/Background";
import TopBar from "../components/Bar/TopBar.jsx";
import Dropdown from "../components/Dropdown/index.jsx";
import styled from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5px;
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
  //width: 150px;
  //background-color: #e7e7e7;
  //border-radius: 10px;
  //height: 35px;
  //font-weight: bold;
`;

const DropDownBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  background-color: #e7e7e7;
  border-radius: 10px;
  height: 35px;
  font-weight: bold;
`;

function QuestionPage() {
  const [view, setView] = useState(false);

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
            {view ? (
              <MdOutlineArrowDropUp size={30} />
            ) : (
              <MdOutlineArrowDropDown size={30} />
            )}
            Java / Kotlin
          </DropDownBtn>

          {view && <Dropdown />}
        </DropDownBox>
      </TopBox>
      <h1>QuestionPage</h1>
    </Background>
  );
}

export default QuestionPage;
