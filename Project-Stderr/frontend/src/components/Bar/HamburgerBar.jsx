// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HamburgerBox = styled.button`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 45px;
  height: 35px;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  z-index: 999;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

function HamburgerBar({ onClick, isOpen }) {
  return (
    <HamburgerBox onClick={onClick}>
      <HamburgerStyle isOpen={isOpen}></HamburgerStyle>
      <HamburgerStyle isOpen={isOpen}></HamburgerStyle>
      <HamburgerStyle isOpen={isOpen}></HamburgerStyle>
    </HamburgerBox>
  );
}

HamburgerBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HamburgerBar;
