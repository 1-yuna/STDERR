// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const DivBox = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  height: 80px;
  margin-top: 30px;
`;

const DivBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: 100%;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

const Nickname = styled.div`
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: fit-content;
`;

const ProfileCircle = styled.div`
  display: flex;
  background-color: #d9d9d9;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const UpdatedAt = styled.div`
  font-size: 10px;
  color: #8f8f8f;
`;

function UserProfile() {
  return (
    <DivBox>
      <DivBox2>
        <ProfileCircle />
      </DivBox2>
      <DescriptionBox>
        <Nickname>hiya</Nickname>
        <UpdatedAt>3시간 전</UpdatedAt>
      </DescriptionBox>
    </DivBox>
  );
}

export default UserProfile;
