import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const WikiContentPage = () => {
  const [editState, setEditState] = useState(false);
  const location = useLocation();
  const { id, title, description, category } = location.state;

  const navigate = useNavigate();

  const handleContentEdit = () => {
    setEditState((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          {editState ? (
            <S.EditTitleBox>
              <S.Label>과목명</S.Label>
              <S.Input defaultValue={title} />
            </S.EditTitleBox>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          {editState ? (
            <S.EditDesBox>
              <S.Label>본문</S.Label>
              <S.TextArea defaultValue={description} />
            </S.EditDesBox>
          ) : (
            <S.Description>{description}</S.Description>
          )}
        </S.Div>
        <S.BtnBox>
          {editState ? (
            <>
              <S.Button onClick={handleContentEdit}>취소하기</S.Button>
              <S.Button onClick={() => handleContentEdit()}>제출하기</S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={() => navigate(-1)}>뒤로가기</S.Button>
              <S.Button onClick={() => handleContentEdit()}>편집하기</S.Button>
            </>
          )}
        </S.BtnBox>
      </S.Section>
    </S.Container>
  );
};

export default WikiContentPage;
