// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

// <TitleTag name="Title" />
// <TitleTag name="Tags" />

const TitleTagBody = styled.div`
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
  height: 50px;
  background-color: white;
  border-radius: 30px;
  border: 2px solid #d9d9d9;
`;

const Text = styled.textarea`
  width: calc(100% - 60px);
  height: calc(100% - 25px);
  background-color: white;
  border: none;
  outline: none;
  font-size: 16px;
  resize: none;
  &::placeholder {
    color: #bebebe;
  }
`;

// eslint-disable-next-line react/prop-types
function TitleTag({ name }) {
  return (
    <TitleTagBody>
      <Title>{name}</Title>
      <TextBox>
        <Text
          type="text"
          placeholder={name === "Title" ? " " : "#kotlin #회원가입"}
        />
      </TextBox>
    </TitleTagBody>
  );
}

export default TitleTag;
