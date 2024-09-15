// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const CodeBody = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Title = styled.div`
  width: 100%;
  padding: 10px 10px;
  font-size: 20px;
  color: #797979;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  border-radius: 20px;
`;

const Text = styled.textarea`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: #f7f7f7;
  border: none;
  outline: none;
  font-size: 12px;
  resize: none;
  &::placeholder {
    color: #bebebe;
  }
`;

const CodeButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`;
const CodeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100%;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
  border-radius: 0 0 10px 10px;
`;

// eslint-disable-next-line react/prop-types
function WriteCode({ value, onChange }) {
  return (
    <CodeBody>
      <Title>Code</Title>
      <TextBox>
        <Text
          type="text"
          placeholder="Comments.."
          value={value}
          onChange={onChange}
        />
      </TextBox>
    </CodeBody>
  );
}

export default WriteCode;
