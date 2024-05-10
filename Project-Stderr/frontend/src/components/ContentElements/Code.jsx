// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const CodeBody = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding: 10px 30px;
  font-size: 25px;
  color: #797979;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  border-radius: 30px;
`;

const Text = styled.textarea`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: #f7f7f7;
  border: none;
  outline: none;
  font-size: 16px;
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

function Code() {
  return (
    <CodeBody>
      <Title>Code</Title>
      <TextBox>
        <Text type="text" placeholder="Comments.." />
      </TextBox>
      <CodeButtonBox>
        <CodeButton>
          <IoMdArrowDropdown size={40} />
        </CodeButton>
      </CodeButtonBox>
    </CodeBody>
  );
}

export default Code;
