// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const DropdownBox = styled.div`
  position: absolute;
  top: 40px; /* 드롭다운이 표시될 위치. 상황에 맞게 조정해야 합니다. */
  right: 0;
`;

function Dropdown() {
  return (
    <DropdownBox>
      <div>마이페이지</div>
      <div>로그아웃</div>
    </DropdownBox>
  );
}

export default Dropdown;
