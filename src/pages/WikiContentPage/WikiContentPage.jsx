import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { courseState } from "../../recoils/courseState";
import { updateCourseList } from "../../utils/utils";
import * as S from "./styles";
import * as C from "../../constants/constants";

const WikiContentPage = () => {
  const [courseLists, setCourseLists] = useRecoilState(courseState);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { id, title, description } = location.state;

  const onChangeTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setEditDescription(e.target.value);
  };

  const handleEditModeToggle = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const handleContentEdit = (id) => {
    const updatedCourseList = updateCourseList(
      id,
      courseLists,
      editTitle,
      editDescription
    );
    setCourseLists(updatedCourseList);
    setIsEditMode(false);
    navigate("/");
    alert(`${id}${C.COMPLETED__COURSE__EDIT}`);
  };

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          {isEditMode ? (
            <S.EditTitleBox>
              <S.Label>과목명</S.Label>
              <S.Input onChange={onChangeTitle} defaultValue={title} />
            </S.EditTitleBox>
          ) : (
            <S.Title>{title}</S.Title>
          )}
          {isEditMode ? (
            <S.EditDesBox>
              <S.Label>본문</S.Label>
              <S.TextArea
                onChange={onChangeDescription}
                defaultValue={description}
              />
            </S.EditDesBox>
          ) : (
            <S.Description>{description}</S.Description>
          )}
        </S.Div>
        <S.BtnBox>
          {isEditMode ? (
            <>
              <S.Button onClick={handleEditModeToggle}>취소하기</S.Button>
              <S.Button onClick={() => handleContentEdit(id)}>
                제출하기
              </S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={() => navigate(-1)}>뒤로가기</S.Button>
              <S.Button onClick={handleEditModeToggle}>수정하기</S.Button>
            </>
          )}
        </S.BtnBox>
      </S.Section>
    </S.Container>
  );
};

export default WikiContentPage;
