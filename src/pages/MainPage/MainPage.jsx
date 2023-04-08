import React from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { courseState } from "../../recoils/courseState";
import { Pagination } from "../../components";
import * as S from "./styles";
import * as C from "../../constants/constants";

const MainPage = () => {
  const courseLists = useRecoilValue(courseState);
  const [searchParams] = useSearchParams();

  const currentPages = parseInt(searchParams.get(C.PAGE));
  const displayCourseLists = courseLists.slice(
    (currentPages - 1) * C.PER__PAGE__ITEMQTY,
    C.PER__PAGE__ITEMQTY * currentPages
  );

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Headline>
            <S.Label>강의번호</S.Label>
            <S.Label>과목명</S.Label>
            <S.Label>분류</S.Label>
          </S.Headline>
          {displayCourseLists.map((item) => (
            <S.Ul key={item.id}>
              <S.LinkTag to={`/${item.id}`} state={item}>
                <S.Span>[{item.id}]</S.Span>
                <S.Li>{item.title}</S.Li>
                <S.Label>{item.category}</S.Label>
              </S.LinkTag>
            </S.Ul>
          ))}
        </S.Div>
        <Pagination />
      </S.Section>
    </S.Container>
  );
};

export default MainPage;
