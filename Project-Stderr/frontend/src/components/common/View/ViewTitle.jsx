// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ViewTitleBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px;
  font-size: 32px;
  color: #8145cd;
  font-weight: bold;
  border-bottom: 1px solid #d9d9d9;
`;

const DivBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 130px;
  height: 35px;
  font-size: 15px;
`;

const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 60px;
  height: 35px;
  font-size: 15px;
  color: #8145cd;
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100px;
  height: 35px;
  font-size: 15px;
  color: #8145cd;
`;

// eslint-disable-next-line react/prop-types
function ViewTitle({ title, postId }) {
  const navigate = useNavigate();

  const handleRemove = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/post/${postId}`, // 삭제할 포스트의 URL
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        alert("삭제되었습니다!");
        navigate(-1);
      } else {
        console.error("Server responded with status:", response.status);
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post");
    }
  };

  return (
    <ViewTitleBody>
      {title}
      <DivBox>
        <EditButton>Edit</EditButton>/
        <RemoveButton onClick={handleRemove}> Remove</RemoveButton>
      </DivBox>
    </ViewTitleBody>
  );
}

export default ViewTitle;
