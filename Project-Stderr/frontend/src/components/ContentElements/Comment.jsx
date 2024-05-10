// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

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
  background-color: white;
  border-radius: 30px;
  border: 2px solid #d9d9d9;
`;

const Text = styled.textarea`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: white;
  border: none;
  outline: none;
  font-size: 16px;
  resize: none;
  &::placeholder {
    color: #bebebe;
  }
`;

function Comment() {
  return (
    <CodeBody>
      <Title>Comment</Title>
      <TextBox>
        <Text type="text" placeholder="Comments.." />
      </TextBox>
    </CodeBody>
  );
}

export default Comment;
