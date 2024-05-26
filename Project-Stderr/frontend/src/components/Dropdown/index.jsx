// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const DropdownBox = styled.div`
  position: absolute;
  top: 40px; /* 드롭다운이 표시될 위치. 상황에 맞게 조정해야 합니다. */
  width: 100%;
  background-color: #e9e9e9;
  box-shadow: 1px 1px 1px #b3b3b3;
  border-radius: 5px;
`;

const DropdownText = styled.div`
  font-size: 12px;
  padding: 10px 0 10px 30px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #ccc; /* 클릭 시 배경색 변경 */
  }
`;

// eslint-disable-next-line react/prop-types
function Dropdown({ onSelect }) {
  return (
    <DropdownBox>
      <DropdownText onClick={() => onSelect("C / C++ / C#")}>
        C / C++ / C#
      </DropdownText>
      <DropdownText onClick={() => onSelect("Java / Kotlin")}>
        Java / Kotlin
      </DropdownText>
      <DropdownText onClick={() => onSelect("Python")}>Python</DropdownText>
      <DropdownText onClick={() => onSelect("JavaScript")}>
        JavaScript
      </DropdownText>
      <DropdownText onClick={() => onSelect("HTML / CSS")}>
        HTML / CSS
      </DropdownText>
      <DropdownText onClick={() => onSelect("React / Vue")}>
        React / Vue
      </DropdownText>
      <DropdownText onClick={() => onSelect("etc")}>etc</DropdownText>
      <DropdownText onClick={() => onSelect("Communicate")}>
        Communicate
      </DropdownText>
    </DropdownBox>
  );
}

export default Dropdown;
