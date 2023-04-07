import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoils/modalState";
import { courseState } from "../../recoils/courseState";
import Overlays from "../Overlays/Overlays";
import * as S from "./styles";

const Modals = () => {
  const [, setModals] = useRecoilState(modalState);
  const [courseLists, setCourseLists] = useRecoilState(courseState);
  const [option, setOption] = useState("선택");
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = courseInfo;
  const categoryOption = [...new Set(courseLists.map((x) => x.category))];

  const selectOnChange = (e) => {
    setOption(e.target.value);
  };

  const onChange = (e) => {
    setCourseInfo({ ...courseInfo, [e.target.name]: e.target.value });
  };

  const handleOnCourse = () => {
    if (!title || !description || !option) {
      alert("모든 양식을 작성해주세요!");
      return;
    }

    const newItems = [
      ...courseLists,
      { id: courseLists.length + 1, title, description, category: option },
    ];

    setCourseLists(newItems);
    alert("제출하였습니다");
    setModals(false);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Section>
          <S.Header>
            <S.Title>강의 정보를 입력해주세요</S.Title>
            <S.Image
              src={process.env.PUBLIC_URL + "/close.svg"}
              onClick={() => setModals(false)}
            />
          </S.Header>
          <S.Div>
            <S.Label>분류:</S.Label>
            <S.Select value={option} onChange={selectOnChange}>
              <S.Option value="선택">분류</S.Option>
              {categoryOption.map((category, index) => (
                <S.Option key={index} value={category}>
                  {category}
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
            <S.Button onClick={() => setModals(false)}>취소하기</S.Button>
            <S.Button onClick={() => handleOnCourse()}>제출하기</S.Button>
          </S.BtnBox>
        </S.Section>
      </S.Wrapper>
      <Overlays />
    </S.Container>
  );
};

export default Modals;
