// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const ReplyBody = styled.div`
  width: 100%;
`;

const ReplyBox = styled.div`
  width: 100%;
  height: 300px;
  border-top: 3px solid #d9d9d9; /* 왼쪽에만 선 추가 */
  border-bottom: 3px solid #d9d9d9;
`;

const TopBox = styled.div`
  width: 100%;
  height: 30%;
  background-color: blue;
`;

const ProfileImg = styled.div`
  width: 100%;
`;

const NameBox = styled.div`
  width: 100%;
`;

const HeartBox = styled.div`
  width: 100%;
`;

const CommentBox = styled.div`
  width: 100%;
`;

function Reply() {
  return (
    <ReplyBody>
      <ReplyBox>
        <TopBox>
          <ProfileImg></ProfileImg>
          <NameBox></NameBox>
          <HeartBox></HeartBox>
        </TopBox>
        <CommentBox></CommentBox>
      </ReplyBox>
    </ReplyBody>
  );
}

export default Reply;
