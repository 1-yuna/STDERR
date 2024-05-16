// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const CheckedNotice = styled.div`
  width: 60px;
  height: 10px;
  font-size: 12px;
  color: #36aaff;
`;

const BoxName = styled.div`
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

function SignupBar() {
  return (
    <SignupBox>
      <BoxName>
        아이디<CheckedNotice>괜찮네요</CheckedNotice>
      </BoxName>
      <SignupSpace>
        <InputData type="text" />
      </SignupSpace>
    </SignupBox>
  );
}

export default SignupBar;
