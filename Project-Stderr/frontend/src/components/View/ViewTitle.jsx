// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";

const ViewTitleBody = styled.div`
  width: 100%;
  padding: 10px 10px;
  font-size: 32px;
  color: #8145cd;
  font-weight: bold;
  border-bottom: 1px solid #d9d9d9;
`;

// eslint-disable-next-line react/prop-types
function ViewTitle({ title }) {
  return <ViewTitleBody>{title}</ViewTitleBody>;
}

export default ViewTitle;
