// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

const PostBox = styled.div`
  //border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  padding: 25px 0 20px 0;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #d9d9d9;
  ${(props) =>
    props.first &&
    css`
      border-top: 1px solid #d9d9d9;
    `}
`;

const TitleCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
  cursor: pointer;
`;

const Title = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #8145cd;
`;

const CommentBox = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  font-size: 14px;
  text-align: left;
  overflow: hidden; //넘어가는 텍스트 hidden
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 줄임표(...)로 표시
  line-height: 1.5; // 간격
  word-wrap: break-word; // 각 단어를 다음 줄로 넘길 수 있도록 허용 (가로 밖으로 벗어남)
  display: -webkit-box;
  -webkit-line-clamp: 3; //라인 수
  -webkit-box-orient: vertical; // 수직으로 배치
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

const TagBox = styled.div`
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
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  transition: color 0.3s;
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
  cursor: default;
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
  cursor: default;
`;

// eslint-disable-next-line react/prop-types
function Post({ first }) {
  const navigate = useNavigate();
  const count = 2;

  const text =
    " '뭐해?'라는 두 글자에 '네가 보고 싶어' 나의 속마음을 담아 우 이모티콘\n" +
    "          하나하나 속에 달라지는 내 미묘한 심리를 알까 우 아니 바쁘지 않아\n" +
    "          nothing no no 잠들어 있지 않아 insomnia-nia-nia 지금 다른 사람과 함\n" +
    "          께이지 않아 응, 나도 너를 생각 중 우리의 네모 칸은 bloom\n" +
    "          엄지손가락으로 장미꽃을 피워 향기에 취할 것 같아 우 오직 둘만의 비밀의\n" +
    "          정원 I feel bloom, I feel bloom, I feel bloom 너에게 한 송이를 더 보내\n" +
    "          밤샘 작업으로 업데이트 흥미로운이 작품의 지은이 that's me 우 어쩜 이\n" +
    "          관계의 클라이맥스 '뭐해?'라는 두 글자에 '네가 보고 싶어' 나의 속마음을\n" +
    "          담아 우 이모티콘 하나하나 속에 달라지는 내 미묘한 심리를 알까 우 아니\n" +
    "          바쁘지 않아 nothing no no 잠들어 있지 않아 insomnia-nia-nia 지금 다른\n" +
    "          사람과 함께이지 않아 응, 나도 너를 생각 중 우리의 네모 칸은 bloom\n" +
    "          엄지손가락으로 장미꽃을 피워 향기에밤샘 작업으로 업데이트 흥미로운 이\n" +
    "          작품의 지은이 that's me 우 어쩜 이 관계의 클라이맥스 '뭐해?'라는 두\n" +
    "          글자에 '네가 보고 싶어' 나의 속마음을 담아 우 이모티콘 하나하나 속에\n" +
    "          달라지는 내 미묘한 심리를 알까 우 아니 바쁘지 않아 nothing no no\n" +
    "          잠들어 있지 않아 insomnia-nia-nia 지금 다른 사람과 함께이지 않아 응,\n" +
    "          나도 너를 생각 중 우리의 네모 칸은 bloom 엄지손가락으로 장미꽃을 피워\n" +
    "          향기에";
  const handleClick = () => {
    navigate("/view"); // 클릭 시 "/newpage"로 이동
  };

  return (
    <PostBox first={first}>
      <TitleCommentBox onClick={handleClick}>
        <Title>Kotlin 회원가입 기능</Title>
        <CommentBox>{text}</CommentBox>
      </TitleCommentBox>
      <Tagline>
        <TagContainer>
          <TagBox>#kotlin</TagBox>
        </TagContainer>
        <IconContainer>
          <HeartBox>
            <HeartIcon size={20} />
            <HeartCount>2</HeartCount>
          </HeartBox>
          <ReplyBox>
            <ReplyIcon />
            <ReplyCount>{count}</ReplyCount>
          </ReplyBox>
        </IconContainer>
      </Tagline>
    </PostBox>
  );
}

export default Post;
