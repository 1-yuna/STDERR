// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import HamburgerBar from "./HamburgerBar.jsx";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

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

const NullBox = styled.div`
  width: 45px;
  height: 35px;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
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
  border-bottom: 1px solid #d9d9d9;
  padding: 0 21px;
`;

const ColoredSearch = styled(FaSearch)`
  color: #676767;
`;

const ColoredHome = styled(IoMdHome)`
  color: #ffffff;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 17px;
  width: 50%;
  height: 35px;
  background-color: #efefef;
  border-radius: 30px;
  border: 2px solid #d9d9d9;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const SearchGuide = styled.input`
  width: calc(100% - 40px);
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

  @media (max-width: 527px) {
    &::placeholder {
      color: #efefef;
    }
  }
`;

const MyPageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
  background-color: #ffffff;
  color: #8145cd;
  text-align: center;
  @media (max-width: 768px) {
    width: 60px;
    font-size: 11px;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
  background-color: #ffffff;
  color: #8145cd;
  text-align: center;
  border-radius: 30px;
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
    width: 60px;
    font-size: 11px;
  }
`;

const DivBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 220px;

  @media (max-width: 768px) {
    width: fit-content;
  }
`;

const Sidebar = styled.div`
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
`;

const HomeButton = styled.button`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  background-color: #8145cd;
  border-bottom: 2px solid #ffffff;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
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

const PageSetting = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

function TopBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const gotoHome = () => {
    window.location.href = "http://localhost:5173";
  };

  return (
    <>
      <TopBox>
        <DivBox>
          <HamburgerBar
            onClick={toggleSidebar}
            isOpen={isSidebarOpen}
          ></HamburgerBar>
          <LogoBox>
            <Logo src={"/STDERR_LOGO_concat_ver.png"} alt="로고" />
          </LogoBox>
        </DivBox>
        <Sidebar isOpen={isSidebarOpen}>
          <HomeButton onClick={gotoHome}>
            <ColoredHome size={24} />
            <Home>Home</Home>
          </HomeButton>
          <LanguagesContainer>
            <CategoryFont>Languages</CategoryFont>
            <LanguagesBox>
              <LanguagesName>C / C++ / C#</LanguagesName>
            </LanguagesBox>
            <LanguagesBox>
              <LanguagesName>Java / Kotlin</LanguagesName>
            </LanguagesBox>
            <LanguagesBox>
              <LanguagesName>Python</LanguagesName>
            </LanguagesBox>
            <LanguagesBox>
              <LanguagesName>Go / Rust / Zig</LanguagesName>
            </LanguagesBox>
            <LanguagesBox>
              <LanguagesName>Swift</LanguagesName>
            </LanguagesBox>
            <LanguagesBox>
              <LanguagesName>etc.</LanguagesName>
            </LanguagesBox>
          </LanguagesContainer>
          <CommunicateContainer>
            <CategoryFont>Communicate</CategoryFont>
            <CommunicateBox>
              <ForumName>Forum</ForumName>
            </CommunicateBox>
          </CommunicateContainer>
        </Sidebar>
        <SearchBar>
          <ColoredSearch />
          <SearchGuide type="text" placeholder="#tag, title" />
        </SearchBar>
        <ButtonBox>
          <MyPageButton>profile</MyPageButton>
          <LogoutButton>logout</LogoutButton>
        </ButtonBox>
        <DivBox>
          <NullBox />
        </DivBox>
      </TopBox>
      <PageSetting isOpen={isSidebarOpen} onClick={closeSidebar} />
    </>
  );
}

export default TopBar;
