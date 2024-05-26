// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ViewCode from "./ViewCode.jsx";

const ReplyBox = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #d9d9d9;
  padding: 30px 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
`;

const ProfileCir = styled.button`
  width: 90px;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const ProfileNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: fit-content;
  height: 100%;
  padding-bottom: 20%;
  margin-left: 20px;
`;

const ReplyAtime = styled.div`
  font-size: 10px;
  color: #8f8f8f;
`;

const DivBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: fit-content;
  height: 100%;
`;

const ProfileName = styled.button`
  font-weight: bold;
  font-size: 20px;
`;

const HeartBox = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 100%;
  font-size: 20px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.expanded ? "auto" : "80px")};
  margin: 30px 0px;
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; //넘어가는 텍스트 hidden
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 줄임표(...)로 표시
  line-height: 1.7; // 간격
  word-wrap: break-word; // 각 단어를 다음 줄로 넘길 수 있도록 허용 (가로 밖으로 벗어남)
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "none" : "3")}; //라인 수
  -webkit-box-orient: vertical; // 수직으로 배치
`;

// const ReplyCommentBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   width: 100%;
//   height: 80px;
// `;
//
// const ReplyComment = styled.div`
//   font-size: 15px;
// `;

const 더보기 = styled.button`
  font-size: 12px;
  color: #d9d9d9;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: color 0.3s;
`;

const HeartIcon = styled(FaRegHeart)`
  color: #8145cd;
`;

const FilledHeartIcon = styled(FaHeart)`
  color: ${(props) => (props.isActive ? "#8145cd" : "#8145cd")};
  transition: color 0.3s;
`;

const HeartCount = styled.div`
  font-size: 15px;
`;

function Reply() {
  const [count, setCount] = useState(0);
  const [heartClicked, setHeartClicked] = useState(false);
  // 텍스트 높이 확장
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded); // 텍스트 확장 상태 변경
  };

  const handleHeartClick = () => {
    if (heartClicked) {
      setCount(count - 1); // 클릭이 이미 되어 있을 때 클릭된 횟수를 1 줄임
    } else {
      setCount(count + 1); // 클릭되어 있지 않을 때 클릭된 횟수를 1 증가
    }
    setHeartClicked(!heartClicked); // 클릭 상태 변경
  };

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
  return (
    <ReplyBox>
      <ProfileContainer>
        <DivBox>
          <ProfileCir />
          <ProfileNameBox>
            <ProfileName>Yuna</ProfileName>
            <ReplyAtime>약 3시간 전</ReplyAtime>
          </ProfileNameBox>
        </DivBox>
        <HeartBox>
          <StyledButton onClick={handleHeartClick}>
            {heartClicked ? (
              <FilledHeartIcon onClick={handleHeartClick} size={24} />
            ) : (
              <HeartIcon onClick={handleHeartClick} size={24} />
            )}
          </StyledButton>
          <HeartCount>{count}</HeartCount>
        </HeartBox>
      </ProfileContainer>
      <TextBox expanded={expanded}>
        <Text expanded={expanded}>{text}</Text>
      </TextBox>
      {expanded && <ViewCode />}
      <더보기 onClick={handleExpandClick}>
        {expanded ? "닫기" : "더보기"}
      </더보기>
    </ReplyBox>
  );
}

export default Reply;
