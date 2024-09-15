// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const QuestionBody = styled.div`
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
  height: ${(props) => (props.expanded ? "auto" : "150px")}; /* 높이 변경 */
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
  line-height: 1.5; // 간격
  word-wrap: break-word; // 각 단어를 다음 줄로 넘길 수 있도록 허용 (가로 밖으로 벗어남)
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "none" : "4")}; //라인 수
  -webkit-box-orient: vertical; // 수직으로 배치
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 10px;
`;

const FirstBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  height: 100%;
`;

const TagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  background-color: #f3ecff;
  color: #8145cd;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  transition: background-color 0.3s;
`;

const SecondBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
  border-radius: 0 0 10px 10px;
`;

const ThreeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  height: 100%;
`;

const HeartBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 100%;
  font-size: 20px;
`;

const HeartIcon = styled(FaHeart)`
  //padding-right: 20px; /* 패딩 값 설정 */
  font-size: 50px;
  color: #8145cd;
  cursor: pointer;
`;

const UnHeartIcon = styled(FaRegHeart)`
  //padding-right: 20px; /* 패딩 값 설정 */
  font-size: 50px;
  color: #8145cd;
  cursor: pointer;
`;

const HeartCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20px;
  font-size: 12px;
`;

// eslint-disable-next-line react/prop-types
function Question({ content, heart, likes }) {
  // 좋아요
  const [heartClicked, setHeartClicked] = useState(false);
  const [count, setCount] = useState(likes);
  // 텍스트 높이 확장
  const [expanded, setExpanded] = useState(false);

  const showButton = expanded || content.split("\n").length > 4;

  const handleHeartClick = () => {
    if (heartClicked) {
      setCount(count - 1); // 클릭이 이미 되어 있을 때 클릭된 횟수를 1 줄임
    } else {
      setCount(count + 1); // 클릭되어 있지 않을 때 클릭된 횟수를 1 증가
    }
    setHeartClicked(!heartClicked); // 클릭 상태 변경
  };

  const handleExpandClick = () => {
    setExpanded(!expanded); // 텍스트 확장 상태 변경
  };

  return (
    <QuestionBody>
      <Title>Question</Title>
      <TextBox expanded={expanded}>
        <Text expanded={expanded}>{content}</Text>
      </TextBox>
      <BottomBox>
        <FirstBox>
          <TagBox>#Kotlin</TagBox>
        </FirstBox>
        <SecondBox>
          {showButton && (
            <Button onClick={handleExpandClick}>
              {expanded ? (
                <IoMdArrowDropup size={40} />
              ) : (
                <IoMdArrowDropdown size={40} />
              )}
            </Button>
          )}
        </SecondBox>
        <ThreeBox>
          <HeartBox>
            {heart &&
              (heartClicked ? (
                <HeartIcon onClick={handleHeartClick} size={20} />
              ) : (
                <UnHeartIcon onClick={handleHeartClick} size={20} />
              ))}
            {heart && <HeartCount>{count}</HeartCount>}
          </HeartBox>
        </ThreeBox>
      </BottomBox>
    </QuestionBody>
  );
}

export default Question;
