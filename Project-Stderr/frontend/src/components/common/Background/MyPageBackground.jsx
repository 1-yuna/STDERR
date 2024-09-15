// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const MyPageBackgroundPadding = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px 7% 0px 7%;
`;

// eslint-disable-next-line react/prop-types
function MyPageBackground({ children }) {
  return <MyPageBackgroundPadding>{children}</MyPageBackgroundPadding>;
}

export default MyPageBackground;
