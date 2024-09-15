// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";

const CheckedNotice = styled.div`
  width: fit-content;
  height: 10px;
  font-size: 12px;
  color: ${(props) => {
    if (props.strength === "괜찮네요") return "#36aaff";
    if (
      props.strength === "숫자도 좀 넣어요" ||
      props.strength === "문자도 좀 넣어요" ||
      props.strength === "영어부터!"
    )
      return "#ff9432";
    if (
      props.strength === "너무 짧아요" ||
      props.strength === "너무 길어요" ||
      props.strength === "비밀번호가 달라요"
    )
      return "#ff3205";
    return "black";
  }};
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10px;
  padding-left: 17px;
  font-size: 12px;
`;

const InputData = styled.input`
  width: calc(100% - 30px);
  height: calc(100% - 10px);
  background-color: #efefef;
  border: none;
  outline: none;
  font-size: 13px;
  resize: none;
  padding: 10px;
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 9px;
  width: 90%;
  height: 80px;
  background-color: white;
`;

const SignupSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
  width: 100%;
  height: 30px;
  background-color: #efefef;
  border-radius: 20px;
`;

// eslint-disable-next-line react/prop-types
function SignupBar({ labelText, inputState, inputValue, onInputChange }) {
  return (
    <SignupBox>
      <Label>
        {labelText}
        <CheckedNotice strength={inputState}>{inputState}</CheckedNotice>
      </Label>
      <SignupSpace>
        <InputData
          type="text"
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
        />
      </SignupSpace>
    </SignupBox>
  );
}

export default SignupBar;
