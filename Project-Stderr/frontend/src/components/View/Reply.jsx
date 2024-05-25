// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ReplyBox = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 10px;
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

const ReplyCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
`;

const ReplyComment = styled.div`
  font-size: 15px;
`;

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
  const [isHeartActive, setIsHeartActive] = useState(false);

  const handleHeartClick = () => {
    setIsHeartActive(!isHeartActive);
  };
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
            {isHeartActive ? (
              <FilledHeartIcon isActive={isHeartActive} size={30} />
            ) : (
              <HeartIcon isActive={isHeartActive} size={30} />
            )}
          </StyledButton>
          <HeartCount>2</HeartCount>
        </HeartBox>
      </ProfileContainer>
      <ReplyCommentBox>
        <ReplyComment>어쩌구 저쩌구</ReplyComment>
        <ReplyComment>어쩌구 저쩌구</ReplyComment>
        <ReplyComment>어쩌구 저쩌구</ReplyComment>
        <ReplyComment>어쩌구 저쩌구..</ReplyComment>
      </ReplyCommentBox>
      <더보기>더보기</더보기>
    </ReplyBox>
  );
}

export default Reply;
