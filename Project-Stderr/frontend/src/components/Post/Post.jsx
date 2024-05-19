// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

const PostBox = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #d9d9d9;
`;

const Title = styled.button`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #8145cd;
`;

const QcommentBox = styled.div`
  display: flex;
  //justify-content: space-evenly;
  width: 100%;
  height: 32%;
  font-size: 14px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

// const Qcomment = styled.div`
//   font-size: 12px;
//   text-align: left;
// `;

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

const FilledHeartIcon = styled(FaHeart)`
  color: ${(props) => (props.isActive ? "#8145cd" : "#8145cd")};
  transition: color 0.3s;
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
  const [heartClicked, setHeartClicked] = useState(false);
  const [count, setCount] = useState(0);

  const handleHeartClick = () => {
    if (heartClicked) {
      setCount(count - 1); // 클릭이 이미 되어 있을 때 클릭된 횟수를 1 줄임
    } else {
      setCount(count + 1); // 클릭되어 있지 않을 때 클릭된 횟수를 1 증가
    }
    setHeartClicked(!heartClicked); // 클릭 상태 변경
  };

  return (
    <PostBox>
      <Title>Kotlin 회원가입 기능</Title>
      <QcommentBox>
        {/*<Qcomment>*/}
        '뭐해?'라는 두 글자에 '네가 보고 싶어' 나의 속마음을 담아 우 이모티콘
        하나하나 속에 달라지는 내 미묘한 심리를 알까 우 아니 바쁘지 않아 nothing
        no no 잠들어 있지 않아 insomnia-nia-nia 지금 다른 사람과 함 께이지 않아
        응, 나도 너를 생각 중 우리의 네모 칸은 bloom 엄지손가락으로 장미꽃을
        피워 향기에 취할 것 같아 우 오직 둘만의 비밀의 정원 I feel bloom, I feel
        bloom, I feel bloom 너에게 한 송이를 더 보내 밤샘 작업으로 업데이트
        흥미로운이 작품의 지은이 that's me 우 어쩜 이 관계의 클라이맥스
        '뭐해?'라는 두 글자에 '네가 보고 싶어' 나의 속마음을 담아 우 이모티콘
        하나하나 속에 달라지는 내 미묘한 심리를 알까 우 아니 바쁘지 않아 nothing
        no no 잠들어 있지 않아 insomnia-nia-nia 지금 다른 사람과 함께이지 않아
        응, 나도 너를 생각 중 우리의 네모 칸은 bloom 엄지손가락으로 장미꽃을
        피워 향기에밤샘 작업으로 업데이트 흥미로운 이 작품의 지은이 that's me 우
        어쩜 이 관계의 클라이맥스 '뭐해?'라는 두 글자에 '네가 보고 싶어' 나의
        속마음을 담아 우 이모티콘 하나하나 속에 달라지는 내 미묘한 심리를 알까
        우 아니 바쁘지 않아 nothing no no 잠들어 있지 않아 insomnia-nia-nia 지금
        다른 사람과 함께이지 않아 응, 나도 너를 생각 중 우리의 네모 칸은 bloom
        엄지손가락으로 장미꽃을 피워 향기에
        {/*</Qcomment>*/}
      </QcommentBox>
      <Tagline>
        <TagContainer>
          <TagBox>#kotlin</TagBox>
        </TagContainer>
        <IconContainer>
          <HeartBox>
            {/*<HeartIcon heartClicked={heartClicked} onClick={handleHeartClick} />*/}
            {heartClicked ? (
              <FilledHeartIcon
                isActive={heartClicked}
                onClick={handleHeartClick}
                size={20}
              />
            ) : (
              <HeartIcon
                isActive={heartClicked}
                onClick={handleHeartClick}
                size={20}
              />
            )}
            <HeartCount>{count}</HeartCount>
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
