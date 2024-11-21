// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const CommentBody = styled.div`
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
  background-color: white;
  border-radius: 20px;
  border: 2px solid #d9d9d9;
`;

const Text = styled.textarea`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: white;
  border: none;
  outline: none;
  font-size: 12px;
  resize: none;
  &::placeholder {
    color: #bebebe;
  }
`;

// eslint-disable-next-line react/prop-types
function WriteComment({ name, value, onChange }) {
  return (
    <CommentBody>
      <Title>{name}</Title>
      <TextBox>
        <Text
          type="text"
          placeholder="Comments.."
          value={value}
          onChange={onChange}
        />
      </TextBox>
    </CommentBody>
  );
}

export default WriteComment;
