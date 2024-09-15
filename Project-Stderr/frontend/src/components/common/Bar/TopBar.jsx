// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import HamburgerBar from "./HamburgerBar.jsx";
import { FaSearch } from "react-icons/fa";
// import { IoMdArrowBack } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

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

// const NullBox = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 120px;
//   height: 35px;
//
//   @media (max-width: 768px) {
//     width: 0;
//     height: 0;
//   }
// `;

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
  padding-left: 21px;
  padding-right: 10%;

  @media (max-width: 768px) {
    padding-right: 21px;
  }
`;

const ColoredSearch = styled(FaSearch)`
  color: #676767;
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
  justify-content: space-between;
  width: 160px;

  @media (max-width: 768px) {
    width: fit-content;
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

// const BackBtn = styled(IoMdArrowBack)`
//   color: #8145cd;
//   font-size: 30px;
//   cursor: pointer;
// `;

// eslint-disable-next-line react/prop-types
function TopBar({ isBackBtn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate(-1); // 이전 페이지로 이동
  // };

  return (
    <>
      <TopBox>
        <DivBox>
          <HamburgerBar />
          <LogoBox>
            <Logo src={"/STDERR_LOGO_concat_ver.png"} alt="로고" />
          </LogoBox>
        </DivBox>

        <SearchBar>
          <ColoredSearch />
          <SearchGuide type="text" placeholder="#tag, title" />
        </SearchBar>
        <ButtonBox>
          {isBackBtn ? (
            <></>
          ) : (
            <>
              <MyPageButton>profile</MyPageButton>
              <LogoutButton>logout</LogoutButton>
            </>
          )}
        </ButtonBox>
        {/*<DivBox>*/}
        {/*  <NullBox>{isBackBtn && <BackBtn onClick={handleGoBack} />}</NullBox>*/}
        {/*</DivBox>*/}
      </TopBox>
      <PageSetting isOpen={isSidebarOpen} onClick={closeSidebar} />
    </>
  );
}

export default TopBar;
