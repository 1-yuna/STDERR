// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Background from "../components/common/Background";
import SignupBar from "../components/common/Bar/SignupBar.jsx";
import styled from "styled-components";

const PageSetting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 600px;
`;

const DivBox1 = styled.div`
  width: 100%;
  height: 60%;
`;

const DivBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 23%;
`;

const CloudFlareBox = styled.div`
  border: 1px solid #d9d9d9;
  width: 40%;
  height: 80px;
`;

const SignupButton = styled.button`
  width: 250px;
  height: 35px;
  border-radius: 15px;
  border: 2px solid #8145cd;
  color: #8145cd;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: #8145cd;
    color: #ffffff;
    border-color: #ffffff;
  }
`;

const LogoBox = styled.button`
  display: flex;
  justify-content: center;
  width: 200px;
  @media (max-width: 768px) {
    width: 160px;
  }
`;

const Logo = styled.img`
  width: 165px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-right: 20px;
    width: 120px;
  }
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #f3ecff;
  color: white;
  z-index: 1000;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 21px;
`;

function JoinPage() {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPwdRe, setUserPwdRe] = useState("");
  const [userName, setUserName] = useState("");
  const [idStrength, setIdStrength] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordReStrength, setPasswordReStrength] = useState("");

  useEffect(() => {
    // ID 강도 계산 로직
    let strength = "";
    // 알파벳 대소문자로 시작하는 조건
    const startsWithLetter = /^[a-zA-Z]/.test(userId);
    // 알파벳 대소문자, 숫자가 포함되어야 하는 조건
    const containsAlphanumeric = /[a-zA-Z]/.test(userId) && /\d/.test(userId);

    if (userId.length === 0) {
      strength = "";
    } else if (userId.length < 4) {
      strength = "너무 짧아요";
    } else if (userId.length > 20) {
      strength = "너무 길어요";
    } else if (!startsWithLetter) {
      strength = "영어부터!";
    } else if (!containsAlphanumeric) {
      strength = "숫자도 좀 넣어요";
    } else {
      strength = "괜찮네요";
    }
    setIdStrength(strength);
  }, [userId]);

  useEffect(() => {
    // 비밀번호 강도 계산 로직
    let strength = "";
    const hasNumber = /[0-9]/.test(userPwd);
    const hasChar = /[A-Z]/.test(userPwd) || /[a-z]/.test(userPwd);

    if (userPwd.length === 0) {
      strength = "";
    } else if (userPwd.length < 8) {
      strength = "너무 짧아요";
    } else if (!hasChar) {
      strength = "문자도 좀 넣어요";
    } else if (!hasNumber) {
      strength = "숫자도 좀 넣어요";
    } else {
      strength = "괜찮네요";
    }
    setPasswordStrength(strength);
  }, [userPwd]);

  useEffect(() => {
    // 비밀번호 재확인 로직
    let strength = "";

    if (userPwdRe.length === 0) {
      strength = ""; // 입력이 없는 경우 빈 문자열로 설정
    } else if (userPwdRe !== userPwd) {
      strength = "비밀번호가 달라요";
    } else if (userPwdRe === userPwd) {
      strength = "괜찮네요";
    }
    setPasswordReStrength(strength);
  }, [userPwd, userPwdRe]);

  return (
    <Background>
      <TopBox>
        <LogoBox>
          <Logo src={"/STDERR_LOGO_concat_ver.png"} alt="로고" />
        </LogoBox>
      </TopBox>
      <PageSetting>
        <DivBox1>
          <SignupBar
            labelText="아이디"
            inputValue={userId}
            onInputChange={setUserId}
            inputState={idStrength}
          ></SignupBar>
          <SignupBar
            labelText="이메일"
            inputValue={userEmail}
            onInputChange={setUserEmail}
          ></SignupBar>
          <SignupBar
            labelText="비밀번호"
            inputValue={userPwd}
            onInputChange={setUserPwd}
            inputState={passwordStrength}
          ></SignupBar>
          <SignupBar
            labelText="비밀번호 재확인"
            inputValue={userPwdRe}
            onInputChange={setUserPwdRe}
            inputState={passwordReStrength}
          ></SignupBar>
          <SignupBar
            labelText="이름"
            inputValue={userName}
            onInputChange={setUserName}
          ></SignupBar>
        </DivBox1>
        <DivBox2>
          <CloudFlareBox />
          <SignupButton>Sign up</SignupButton>
        </DivBox2>
      </PageSetting>
    </Background>
  );
}

export default JoinPage;
