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
  border: 2px solid #8145cd;
  border-radius: 12px;

  &:hover {
    background-color: #8145cd;
    color: white;
  }
`;

// eslint-disable-next-line react/prop-types
function PostBtn({ name, route, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (route === "home") {
      alert("작성되었습니다.");
      navigate("/");
    } else if (route === "before") {
      alert("작성되었습니다.");
      navigate(-1);
    } else if (route === "replyPage") {
      navigate("/reply");
    }
  };
  return (
    <PostBtnBody>
      <PostBtnBox onClick={handleClick}>{name}</PostBtnBox>
    </PostBtnBody>
  );
}

export default PostBtn;
