// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const CodeBody = styled.div`
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
  height: ${(props) => (props.expanded ? "auto" : "300px")}; /* 높이 변경 */
  background-color: #f7f7f7;
  border-radius: 20px;
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
function ViewCode({ code }) {
  // 텍스트 높이 확장
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded); // 텍스트 확장 상태 변경
  };

  const showButton = expanded || code.split("\n").length > 8;
  return (
    <CodeBody>
      <Title>Code</Title>
      <TextBox expanded={expanded}>
        <Text expanded={expanded}>{code}</Text>
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
    </CodeBody>
  );
}

export default ViewCode;
