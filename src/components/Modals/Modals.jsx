import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoils/modalState";
import { courseState } from "../../recoils/courseState";
import { addNewCourse, getAllCategories } from "../../utils/utils";
import Overlays from "../Overlays/Overlays";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Modals = () => {
  const [, setModals] = useRecoilState(modalState);
  const [courseLists, setCourseLists] = useRecoilState(courseState);
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    category: "",
  });

  const { title, description, category } = courseInfo;
  const categoryOption = getAllCategories(courseLists);

  const handleSubmitCourse = () => {
    if (!title || !description || !category) {
      alert(C.FILL__ALL__FORM);
      return;
    }

    const newItems = addNewCourse(courseLists, title, description, category);
    setCourseLists(newItems);
    alert(C.SUBMITTED__FORM);
    setModals(false);
  };

  const closeModals = () => setModals(false);

  const onChange = (e) => {
    setCourseInfo({ ...courseInfo, [e.target.name]: e.target.value });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Section>
          <S.Header>
            <S.Title>강의 정보를 입력해주세요</S.Title>
            <S.Image src={C.CLOSE__LOGO} onClick={closeModals} />
          </S.Header>
          <S.Div>
            <S.Label>분류:</S.Label>
            <S.Select onChange={onChange} value={category} name="category">
              <S.Option value="분류">분류</S.Option>
              {categoryOption.map((ctgOption, index) => (
                <S.Option key={index} value={ctgOption}>
                  {ctgOption}
                </S.Option>
              ))}
            </S.Select>
          </S.Div>
          <S.Div>
            <S.Label>과목명:</S.Label>
            <S.Input
              onChange={onChange}
              value={title}
              name="title"
              placeholder="개설하려는 강의명을 작성해주세요"
            />
          </S.Div>
          <S.Div>
            <S.Label>본문:</S.Label>
            <S.TextArea
              onChange={onChange}
              value={description}
              name="description"
              placeholder="교육개요와 강의내용을 작성해주세요"
            />
          </S.Div>
          <S.BtnBox>
            <S.Button onClick={closeModals}>취소하기</S.Button>
            <S.Button onClick={handleSubmitCourse}>제출하기</S.Button>
          </S.BtnBox>
        </S.Section>
      </S.Wrapper>
      <Overlays />
    </S.Container>
  );
};

export default Modals;
