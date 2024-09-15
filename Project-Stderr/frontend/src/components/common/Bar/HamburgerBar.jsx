// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// 배경
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 998;
`;

// 햄버그바
const HamburgerBox = styled.button`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 45px;
  height: 35px;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  @media (max-width: 768px) {
    margin-right: 15%;
    width: 30px;
    height: 35px;
  }
`;

const HamburgerStyle = styled.div`
  background-color: ${(props) => (props.isOpen ? "#fff" : "#8145cd")};
  width: 40px;
  height: 5px;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

// 사이드바
const SidebarContainer = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-350px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 100vh;
  background-color: #8145cd;
  border-right: 2px solid #fff;
  color: white;
  transition: left 0.3s ease;
  z-index: 999;
`;

const HomeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #8145cd;
  border-bottom: 2px solid #ffffff;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
`;

const HomeIcon = styled(IoMdHome)`
  color: #ffffff;
`;

const Home = styled.div`
  margin-left: 5px;
  margin-top: 7px;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;

const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8145cd;
  width: 100%;
  height: 400px;
`;

const CategoryFont = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  padding: 7px 20px;
  border-bottom: 2px solid #ffffff;
`;

const LanguagesBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #ffffff;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: #ffffff;
    border-color: #ffffff;
  }
`;

const LanguagesName = styled.button`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  transition:
    background-color 0.3s,
    color 0.3s;
  ${LanguagesBox}:hover & {
    color: #8145cd;
  }
`;

const CommunicateContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const CommunicateBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: #ffffff;
    border-color: #ffffff;
  }
`;

const ForumName = styled.button`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  transition:
    background-color 0.3s,
    color 0.3s;
  ${CommunicateBox}:hover & {
    color: #8145cd;
  }
`;

function HamburgerBar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 햄버그바 클릭
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 배경 클릭
  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  // 페이지 이동
  const handleCategoryClick = (categoryId) => {
    navigate(`/board/${categoryId}`);
  };

  return (
    <>
      <Overlay isOpen={isSidebarOpen} onClick={handleOverlayClick} />
      <HamburgerBox onClick={toggleSidebar}>
        <HamburgerStyle isOpen={isSidebarOpen} />
        <HamburgerStyle isOpen={isSidebarOpen} />
        <HamburgerStyle isOpen={isSidebarOpen} />
      </HamburgerBox>
      <SidebarContainer
        isOpen={isSidebarOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <HomeButton onClick={() => navigate("/")}>
          <HomeIcon size={24} />
          <Home>Home</Home>
        </HomeButton>
        <LanguagesContainer>
          <CategoryFont>Languages</CategoryFont>
          <LanguagesBox onClick={() => handleCategoryClick(1)}>
            <LanguagesName>C / C++ / C#</LanguagesName>
          </LanguagesBox>
          <LanguagesBox onClick={() => handleCategoryClick(2)}>
            <LanguagesName>Java / Kotlin</LanguagesName>
          </LanguagesBox>
          <LanguagesBox onClick={() => handleCategoryClick(3)}>
            <LanguagesName>Python</LanguagesName>
          </LanguagesBox>
          <LanguagesBox onClick={() => handleCategoryClick(4)}>
            <LanguagesName>Go / Rust / Zig</LanguagesName>
          </LanguagesBox>
          <LanguagesBox onClick={() => handleCategoryClick(5)}>
            <LanguagesName>Swift</LanguagesName>
          </LanguagesBox>
          <LanguagesBox onClick={() => handleCategoryClick(6)}>
            <LanguagesName>etc.</LanguagesName>
          </LanguagesBox>
        </LanguagesContainer>
        <CommunicateContainer>
          <CategoryFont>Communicate</CategoryFont>
          <CommunicateBox onClick={() => handleCategoryClick(7)}>
            <ForumName>Forum</ForumName>
          </CommunicateBox>
        </CommunicateContainer>
      </SidebarContainer>
    </>
  );
}

export default HamburgerBar;
