// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const BackgroundPadding = styled.div`
  width: 100%;
  padding: 150px 20% 100px 20%;
`;

// eslint-disable-next-line react/prop-types
function Background({ children }) {
  return <BackgroundPadding>{children}</BackgroundPadding>;
}

export default Background;
