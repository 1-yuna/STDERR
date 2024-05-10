// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const HamburgerBox = styled.div`
  width: 300px;
  height: 300px;
  background: aqua;
`;

function HamburgerBar() {
  return (
    <HamburgerBox>
      <h1>hamburger</h1>
    </HamburgerBox>
  );
}

export default HamburgerBar;
