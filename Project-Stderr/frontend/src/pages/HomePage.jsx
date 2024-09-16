// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import HamburgerBar from "../components/common/Bar/HamburgerBar.jsx";
import Background from "../components/common/Background/index.jsx";
import { FaSearch } from "react-icons/fa";

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 55px;
`;

const PageSetting = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ErrorDeco1 = styled.div`
  color: #757575;
  font-size: 2rem;
  font-weight: 800;
  position: fixed;
  left: 15%;
  top: 18%;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ErrorDeco2 = styled.div`
  color: #333;
  font-size: 3rem;
  font-weight: 900;
  position: absolute;
  left: 20%;
  top: 90%;

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ErrorDeco3 = styled.div`
  color: #d9d9d9;
  font-size: 1.4rem;
  font-weight: bold;
  position: absolute;
  left: 91%;
  top: 75%;
  white-space: nowrap; /* 한 줄로 표시되도록 설정 */

  @media (max-width: 1200px) {
    font-size: 1rem;
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
  background-color: #ffffff;
  color: white;
  z-index: 1000;
  padding: 0 21px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

const Logo = styled.img`
  width: 300px;

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 385px;
  background-color: #fff;
  padding-bottom: 40px;
  margin-top: 60px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 17px;
  width: 70%;
  height: 42px;
  background-color: #efefef;
  border-radius: 30px;
  border: 2px solid #d9d9d9;
`;

const SearchGuide = styled.input`
  width: calc(100% - 30px);
  height: calc(100% - 10px);
  background-color: #efefef;
  border: none;
  outline: none;
  font-size: 13px;
  resize: none;
  padding: 10px;
  &::placeholder {
    color: #bebebe;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const LoginButton = styled.button`
  text-align: center;
  width: 200px;
  height: 40px;
  background-color: #8145cd;
  color: #fff;
  border-radius: 12px;

  @media (max-width: 1200px) {
    width: 160px;
  }

  @media (max-width: 900px) {
    width: 110px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: 60%;
    font-size: 10px;
  }
`;

const DivBox1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
`;

const DivBox2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  padding: 0 20%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 200px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  @media (max-width: 768px) {
    height: 170px;
  }
`;

const ColoredSearch = styled(FaSearch)`
  color: #676767;
`;

// 모달 배경 스타일
const ModalBackground = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

// 모달 스타일
const Modal = styled.div`
  position: fixed;
  width: 25%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

// 모달 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalBox = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15% 0;
`;

const LoginBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

const DivBox3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 65%;
`;

const DivBox4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
`;

const Label = styled.div`
  width: 100%;
  height: 20px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 5px;
`;

const LoginBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  background-color: #efefef;
`;

const InputId = styled.input`
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: #efefef;
  border: none;
  outline: none;
  font-size: 13px;
  resize: none;
  padding: 10px;
`;

const CheckBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: #efefef;
  padding-bottom: 4px;
  padding-right: 2px;
`;

const CheckMark = styled.span`
  display: ${({ checked }) => (checked ? "block" : "none")};
  width: 7px;
  height: 12px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`;

const MemorizeId = styled.div`
  color: #36ff7a;
  font-size: 13px;
  margin-left: 5px;
`;

function HomePage() {
  // 모달 창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 로그인
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const gotoSignup = () => {
    window.location.href = "http://localhost:5173/join";
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  // 로그인
  const handleLogin = async () => {
    const UserLogin = {
      username,
      password,
    };

    console.log("로그인", UserLogin);

    try {
      const response = await fetch(`http://localhost:8080/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserLogin),
      });

      if (response.ok) {
        const token = await response.text();
        console.log(token);
        localStorage.setItem("token", token);
        alert("로그인이 완료되었습니다.");
      } else {
        console.error("Failed to submit post:", response.status);
        alert("회원이 아닙니다.");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <PageSetting>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>STDERR</title>
      </Helmet>
      <Background>
        <ErrorDeco1>404: Not found</ErrorDeco1>
        <ErrorDeco2>403: Forbidden</ErrorDeco2>
        <ErrorDeco3>504: Gate found</ErrorDeco3>
        <TopBox>
          <HamburgerBar />
        </TopBox>

        <CenterContainer>
          <LogoContainer>
            <Logo src={"/STDERR_LOGO.png"} alt="로고" />
          </LogoContainer>
          <DivContainer>
            <DivBox1>
              <SearchBar>
                <ColoredSearch />
                <SearchGuide type="text" placeholder="#tag, title" />
              </SearchBar>
            </DivBox1>
            <DivBox2>
              <LoginButton onClick={openModal}>Login</LoginButton>
              <LoginButton onClick={gotoSignup}>Sign up</LoginButton>
            </DivBox2>
          </DivContainer>
        </CenterContainer>
      </Background>
      <ModalBackground show={isModalOpen} onClick={closeModal}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          <h3>Login</h3>
          <ModalBox>
            <DivBox3>
              <DivBox4>
                <Label>ID</Label>
                <LoginBar>
                  <InputId
                    labelText="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </LoginBar>
              </DivBox4>
              <LoginBarContainer>
                <Label>Password</Label>
                <DivBox>
                  <LoginBar>
                    <InputId
                      labelText="비밀번호"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </LoginBar>
                  <Label>
                    <CheckBox checked={isChecked} onClick={toggleCheck}>
                      <CheckMark checked={isChecked} />
                    </CheckBox>
                    <MemorizeId>나를 기억해줘요!</MemorizeId>
                  </Label>
                </DivBox>
              </LoginBarContainer>
            </DivBox3>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          </ModalBox>
        </Modal>
      </ModalBackground>
    </PageSetting>
  );
}

export default HomePage;
