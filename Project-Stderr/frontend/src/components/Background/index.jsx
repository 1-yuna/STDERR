// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const BackgroundPadding = styled.div`
  width: 100%;
  height: 100vh;
  background-color: antiquewhite;
  padding: 80px 200px 0px 200px;
`;

// eslint-disable-next-line react/prop-types
function Background({ children }) {
  return <BackgroundPadding>{children}</BackgroundPadding>;
}

export default Background;
