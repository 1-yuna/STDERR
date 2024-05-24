// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const QuestionBody = styled.div`
  width: 100%;
  padding: 20px 0;
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
  height: 200px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #d9d9d9;
`;

const Text = styled.textarea`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: white;
  border: none;
  outline: none;
  font-size: 16px;
  resize: none;
  &::placeholder {
    color: #bebebe;
  }
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 30px;
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
function Question({ dropBtn }) {
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
    <QuestionBody>
      <Title>Question</Title>
      <TextBox>
        <Text type="text" placeholder="Comments.." />
      </TextBox>
      <BottomBox>
        <FirstBox>
          <TagBox>#Kotlin</TagBox>
        </FirstBox>
        <SecondBox>
          {dropBtn && (
            <Button>
              <IoMdArrowDropdown size={40} />
            </Button>
          )}
        </SecondBox>
        <ThreeBox>
          <HeartBox>
            {/*<HeartIcon heartClicked={heartClicked} onClick={handleHeartClick} />*/}
            {heartClicked ? (
              <HeartIcon onClick={handleHeartClick} size={20} />
            ) : (
              <UnHeartIcon onClick={handleHeartClick} size={20} />
            )}
            <HeartCount>{count}</HeartCount>
          </HeartBox>
        </ThreeBox>
      </BottomBox>
    </QuestionBody>
  );
}

export default Question;
