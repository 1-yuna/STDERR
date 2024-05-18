// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import HamburgerBar from "../components/Bar/HamburgerBar.jsx";
import Background from "../components/Background/index.jsx";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const PageSetting = styled.div`
  width: 100%;
  height: 100%;
`;

const ErrorDeco1 = styled.div`
  color: #757575;
  font-size: 30px;
  font-weight: 800;
  position: absolute;
  left: 125px;
  top: 160px;
`;

const ErrorDeco2 = styled.div`
  color: #333;
  font-size: 45px;
  font-weight: 900;
  position: absolute;
  left: 220px;
  top: 600px;
`;

const ErrorDeco3 = styled.div`
  color: #d9d9d9;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 1320px;
  top: 500px;
  width: 120px; /* 적절한 width 설정 */
  overflow: hidden;
  white-space: nowrap; /* 한 줄로 표시되도록 설정 */
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

const ColoredHome = styled(IoMdHome)`
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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

const Logo = styled.img`
  width: 300px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 385px;
  background-color: #fff;
  padding-bottom: 40px;
  margin-top: 40px;
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
`;

const LoginButton = styled.button`
  text-align: center;
  width: 200px;
  height: 40px;
  background-color: #8145cd;
  color: #fff;
  border-radius: 12px;
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
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

const ColoredSearch = styled(FaSearch)`
  color: #676767;
`;

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PageSetting>
      <Background>
        <ErrorDeco1>404: Not found</ErrorDeco1>
        <ErrorDeco2>403: Forbidden</ErrorDeco2>
        <ErrorDeco3>405: Gate found</ErrorDeco3>
        <TopBox>
          <HamburgerBar
            onClick={toggleSidebar}
            isOpen={isSidebarOpen}
          ></HamburgerBar>

          <Sidebar isOpen={isSidebarOpen}>
            <HomeButton>
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
              <LoginButton>Login</LoginButton>
              <LoginButton>Sign up</LoginButton>
            </DivBox2>
          </DivContainer>
        </CenterContainer>
      </Background>
    </PageSetting>
  );
}

export default HomePage;
