// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Background from "../components/common/Background";
import TopBar from "../components/common/Bar/TopBar.jsx";
import Dropdown from "../components/common/Dropdown/index.jsx";
import styled from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import TitleTag from "../components/common/Write/TitleTag.jsx";
import WriteComment from "../components/common/Write/WriteComment.jsx";
import WriteCode from "../components/common/Write/WriteCode.jsx";
import PostBtn from "../components/common/Write/PostBtn.jsx";
import { useNavigate } from "react-router-dom";

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 20px;
  color: #5a5a5a;
`;

const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
`;

const DropDownBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e7e7e7;
  border-radius: 5px;
  height: 35px;
  font-weight: bold;
  box-shadow: 1px 1px 1px #b3b3b3;
  cursor: pointer;
  padding: 0 5px 0 20px;
`;

const RuleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;

const RuleTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 0 0 20px 15px;
`;

const RuleText = styled.div`
  font-size: 16px;
  line-height: 2.5; /* 줄 간격 조정 */
  white-space: pre-wrap;
`;

function QuestionPage() {
  const token = localStorage.getItem("token");

  //드롭다운
  const [view, setView] = useState(false);
  const [selectedOption, setSelectedOption] = useState("C / C++ / C#");

  //데이터 저장
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const str =
    " 1. 문제 상황(제목)을 한 줄로 요약하기! \n 2. 문제에 대해 자세히 서술해주세요!\n 3. 본인이 하고자하는 바가 무엇인지도 서술해주세요! \n 4. 문제 상황과 관련있는 태그를 추가해주세요! \n 5. 글 올리기! \n";
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setView(false); //드롭다운 닫기
  };

  const handleSubmit = async () => {
    // 입력 검증
    if (!title || !content || !code) {
      alert("제목, 내용, 코드 모두 입력해야 합니다.");
      return;
    }

    // 카테고리 아이디
    const categoryId = (() => {
      switch (selectedOption) {
        case "C / C++ / C#":
          return 1;
        case "Java / Kotlin":
          return 2;
        case "Python":
          return 3;
        case "Go/Rust/Zig":
          return 4;
        case "Swift":
          return 5;
        case "etc.":
          return 6;
        case "Forum":
          return 7;
        default:
          return 1;
      }
    })();

    // 태그 검사
    const tagArray = tags
      .trim()
      .split(" ")
      .filter((tag) => tag.startsWith("#"));
    if (
      tags.trim() !== "" &&
      tagArray.length !== tags.trim().split(" ").length
    ) {
      alert("#로 시작하지 않는 태그가 있습니다.");
      return;
    }

    const postData = {
      title,
      content,
      code,
      categoryId,
      ...(tagArray.length > 0 && { tags: tagArray }), // tagArray가 비어있지 않으면 tags 필드를 추가
    };

    try {
      const response = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("200");
        alert("작성이 완료되었습니다!");
        navigate(-1);
      } else {
        console.error("Failed to submit post:", response.status);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <Background>
      <TopBar isBackBtn={true} />
      <TopBox>
        <QuestionBox>Ask a question</QuestionBox>
        <DropDownBox
          onClick={() => {
            setView(!view);
          }}
        >
          <DropDownBtn>
            {selectedOption || "C / C++ / C#"}
            {view ? (
              <MdOutlineArrowDropUp size={30} />
            ) : (
              <MdOutlineArrowDropDown size={30} />
            )}
          </DropDownBtn>
          {view && <Dropdown onSelect={handleOptionChange} />}
        </DropDownBox>
      </TopBox>
      <RuleBox>
        <RuleTitle>Step</RuleTitle>
        <RuleText>{str}</RuleText>
      </RuleBox>
      <TitleTag
        name="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <WriteComment
        name="Comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <WriteCode value={code} onChange={(e) => setCode(e.target.value)} />
      <TitleTag
        name="Tag"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <PostBtn name="Post" onClick={handleSubmit} />
    </Background>
  );
}

export default QuestionPage;
