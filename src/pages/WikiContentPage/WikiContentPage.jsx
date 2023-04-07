import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { courseState } from "../../recoils/courseState";
import * as S from "./styles";

const WikiContentPage = () => {
  const [courseLists, setCourseLists] = useRecoilState(courseState);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editState, setEditState] = useState(false);
  const location = useLocation();
  const { id, title, description } = location.state;

  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const onChangeDes = (e) => {
    setEditDescription(e.target.value);
  };

  const handleEditMode = () => {
    setEditState((prevState) => !prevState);
  };

  const handleContentEdit = (id) => {
    const newEditItems = courseLists.map((courseItem) => {
      if (courseItem.id === id) {
        return {
          ...courseItem,
          title: editTitle ? editTitle : title,
          description: editDescription ? editDescription : description,
        };
      }
      return courseItem;
    });
    setCourseLists(newEditItems);
    setEditState(false);
    alert(`${id}번 강의 편집이 완료되었습니다!`);
    navigate("/");
  };

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          {editState ? (
            <S.EditTitleBox>
              <S.Label>과목명</S.Label>
              <S.Input onChange={onChangeTitle} defaultValue={title} />
            </S.EditTitleBox>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          {editState ? (
            <S.EditDesBox>
              <S.Label>본문</S.Label>
              <S.TextArea onChange={onChangeDes} defaultValue={description} />
            </S.EditDesBox>
          ) : (
            <S.Description>{description}</S.Description>
          )}
        </S.Div>
        <S.BtnBox>
          {editState ? (
            <>
              <S.Button onClick={handleEditMode}>취소하기</S.Button>
              <S.Button onClick={() => handleContentEdit(id)}>
                제출하기
              </S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={() => navigate(-1)}>뒤로가기</S.Button>
              <S.Button onClick={handleEditMode}>편집하기</S.Button>
            </>
          )}
        </S.BtnBox>
      </S.Section>
    </S.Container>
  );
};

export default WikiContentPage;
