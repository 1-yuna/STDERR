// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

const PostBox = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #d9d9d9;
`;

const Title = styled.button`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #8145cd;
`;

const QcommentBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
`;

const Qcomment = styled.div`
  font-size: 12px;
`;

const Tagline = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
`;

const TagBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  background-color: #f3ecff;
  color: #8145cd;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

const HeartBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70px;
  height: 100%;
  font-size: 20px;
`;

const HeartIcon = styled(FaRegHeart)`
  color: #8145cd;
`;

const HeartCount = styled.div`
  font-size: 12px;
`;

const ReplyBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70px;
  height: 100%;
  font-size: 20px;
`;

const ReplyIcon = styled(FaRegComment)`
  color: #8145cd;
`;

const ReplyCount = styled.div`
  font-size: 12px;
`;

function Post() {
  return (
    <PostBox>
      <Title>Kotlin 회원가입 기능</Title>
      <QcommentBox>
        <Qcomment>어쩌구 저쩌구</Qcomment>
        <Qcomment>어쩌구 저쩌구</Qcomment>
        <Qcomment>어쩌구 저쩌구</Qcomment>
        <Qcomment>어쩌구 저쩌구..</Qcomment>
      </QcommentBox>
      <Tagline>
        <TagContainer>
          <TagBox>#kotlin</TagBox>
        </TagContainer>
        <IconContainer>
          <HeartBox>
            <HeartIcon />
            <HeartCount>2</HeartCount>
          </HeartBox>
          <ReplyBox>
            <ReplyIcon />
            <ReplyCount>2</ReplyCount>
          </ReplyBox>
        </IconContainer>
      </Tagline>
    </PostBox>
  );
}

export default Post;
