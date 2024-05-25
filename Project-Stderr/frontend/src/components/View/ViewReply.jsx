// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

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
  height: ${(props) => (props.expanded ? "auto" : "300px")};
  background-color: white;
  border-radius: 20px;
  border: 2px solid #d9d9d9;
  padding: 25px 30px;
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; //넘어가는 텍스트 hidden
  text-overflow: ellipsis; // 텍스트가 넘칠 경우 줄임표(...)로 표시
  line-height: 2; // 간격
  word-wrap: break-word; // 각 단어를 다음 줄로 넘길 수 있도록 허용 (가로 밖으로 벗어남)
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "none" : "8")}; //라인 수
  -webkit-box-orient: vertical; // 수직으로 배치
`;

const CodeButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
`;
const CodeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100%;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
  border-radius: 0 0 10px 10px;
`;

// eslint-disable-next-line react/prop-types
function ViewReply() {
  // 텍스트 높이 확장
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded); // 텍스트 확장 상태 변경
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

  const showButton = expanded || text.split("\n").length > 8;

  return (
    <CommentBody>
      <Title>Reply</Title>
      <TextBox expanded={expanded}>
        <Text expanded={expanded}>{text}</Text>
      </TextBox>
      <CodeButtonBox>
        {showButton && (
          <CodeButton onClick={handleExpandClick}>
            {expanded ? (
              <IoMdArrowDropup size={40} />
            ) : (
              <IoMdArrowDropdown size={40} />
            )}
          </CodeButton>
        )}
      </CodeButtonBox>
    </CommentBody>
  );
}

export default ViewReply;
