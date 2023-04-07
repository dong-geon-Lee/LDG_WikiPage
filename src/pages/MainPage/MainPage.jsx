import React from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import * as S from "./styles";

const MainPage = ({ courseItems }) => {
  const [searchParams] = useSearchParams();

  const curPages = parseInt(searchParams.get("page"));
  const perPageItemCount = 5;
  const displayCourseLists = courseItems.slice(
    (curPages - 1) * perPageItemCount,
    perPageItemCount * curPages
  );

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Headline>
            <S.Label>번호</S.Label>
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
        <Pagination courseCount={courseItems.length} />
      </S.Section>
    </S.Container>
  );
};

export default MainPage;
