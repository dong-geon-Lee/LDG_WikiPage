import React from "react";
import * as S from "./styles";
import { courseDatas } from "../../data/mockData";
import { useState } from "react";

const Modals = () => {
  const [option, setOption] = useState("선택");
  const categoryOption = [...new Set(courseDatas.map((x) => x.category))];

  const onChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>강의 정보를 입력해주세요</S.Title>
        <S.Div>
          <S.Label>분류:</S.Label>
          <S.Select value={option} onChange={onChange}>
            <S.Option value="선택">선택</S.Option>
            {categoryOption.map((category) => (
              <S.Option value={category}>{category}</S.Option>
            ))}
          </S.Select>
        </S.Div>
        <S.Div>
          <S.Label>과목명:</S.Label>
          <S.Input></S.Input>
        </S.Div>
        <S.Div>
          <S.Label>본문:</S.Label>
          <S.TextArea></S.TextArea>
        </S.Div>
        <S.BtnBox>
          <S.Button>취소</S.Button>
          <S.Button>제출</S.Button>
        </S.BtnBox>
      </S.Wrapper>
    </S.Container>
  );
};

export default Modals;
