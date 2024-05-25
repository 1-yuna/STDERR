// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostBtnBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;

const PostBtnBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 8px 0;
  color: #8145cd;
  border: 1px solid #8145cd;
  border-radius: 12px;

  &:hover {
    background-color: #8145cd;
    color: white;
  }
`;

// eslint-disable-next-line react/prop-types
function PostBtn({ name }) {
  const navigate = useNavigate();
  const PostClick = () => {
    alert("작성되었습니다. ");
    navigate("/");
  };
  return (
    <PostBtnBody>
      <PostBtnBox onClick={PostClick}>{name}</PostBtnBox>
    </PostBtnBody>
  );
}

export default PostBtn;
