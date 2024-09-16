// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Background from "../components/common/Background";
import TopBar from "../components/common/Bar/TopBar.jsx";
import Post from "../components/common/View/Post.jsx";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid #d9d9d9;
`;
const Questions = styled.div`
  display: flex;
  font-size: 13px;
`;

const Category = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

function BoardPage() {
  const token = localStorage.getItem("token");

  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/category/${categoryId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // JWT를 Authorization 헤더에 추가
            },
          },
        );

        if (response.ok) {
          const data = await response.json(); // 응답을 JSON으로 파싱
          setCategoryData(data);
        } else {
          console.error("Server responded with status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchData(); // 데이터 가져오기
  }, [categoryId]);

  return (
    <Background>
      <TopBar></TopBar>
      {categoryData ? (
        <>
          <CategoryBox>
            <Questions>{categoryData.postCount} questions</Questions>
            <Category> {categoryData.categoryName} </Category>
          </CategoryBox>
          {categoryData.posts.map((post) => (
            <Post key={post.postId} post={post} categoryId={categoryId} />
          ))}
        </>
      ) : (
        <p></p>
      )}
    </Background>
  );
}

export default BoardPage;
