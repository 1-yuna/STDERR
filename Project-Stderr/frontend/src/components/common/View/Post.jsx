// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
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
  display: inline-flex;
  justify-content: center;
  margin-right: 5px;
  padding: 0 5px;
  align-items: center;
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

function Post({ post, categoryId }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/view/${categoryId}/${post.postId}`); // 클릭 시 "/newpage"로 이동
  };

  return (
    <PostBox>
      <TitleCommentBox onClick={handleClick}>
        <Title>{post.title}</Title>
        <CommentBox>{post.content}</CommentBox>
      </TitleCommentBox>
      <Tagline>
        <TagContainer>
          {post.tags &&
            post.tags.map((tag) => (
              <TagBox key={tag.tagId}>{tag.tagName}</TagBox>
            ))}
        </TagContainer>
        <IconContainer>
          <HeartBox>
            <HeartIcon size={20} />
            <HeartCount>{post.likes}</HeartCount>
          </HeartBox>
          <ReplyBox>
            <ReplyIcon />
            <ReplyCount>{post.reply}</ReplyCount>
          </ReplyBox>
        </IconContainer>
      </Tagline>
    </PostBox>
  );
}

export default Post;
