// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Background from "../components/common/Background";
import TopBar from "../components/common/Bar/TopBar.jsx";
import Question from "../components/common/View/Question.jsx";
import ViewCode from "../components/common/View/ViewCode.jsx";
import ViewTitle from "../components/common/View/ViewTitle.jsx";
import PostBtn from "../components/common/Write/PostBtn.jsx";
import Reply from "../components/common/View/Reply.jsx";
import { useParams } from "react-router-dom";

function ViewPage() {
  const token = localStorage.getItem("token");
  const { postId } = useParams();

  // request data
  const [postData, setPostData] = useState(null);
  const [authorData, setAuthorData] = useState(false);

  console.log(postId);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/post/${postId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // JWT를 Authorization 헤더에 추가
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setAuthorData(data.author);
          setPostData(data.post);
          console.log("data", data);
        } else {
          console.error("Server responded with status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };
    fetchPostData();
  }, [postId]);

  if (!postData) {
    return "";
  }

  return (
    <Background>
      <TopBar isBackBtn={true} />
      <ViewTitle
        title={postData.title}
        authorData={authorData}
        postId={postId}
      />
      <Question
        content={postData.content}
        heart={true}
        likes={postData.likes}
        tags={postData.tags}
      />
      <ViewCode code={postData.code} />
      <PostBtn name="Reply" route="replyPage" />
      <Reply />
    </Background>
  );
}

export default ViewPage;
