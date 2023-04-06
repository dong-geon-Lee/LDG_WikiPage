import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { courseDatas } from "../../data/mockData";
import Pagination from "../../components/Pagination/Pagination";
import * as S from "./styles";

const MainPage = () => {
  const [searchParams] = useSearchParams();

  const curPages = parseInt(searchParams.get("page"));
  const perPageItemCount = 5;
  const displayCourseLists = courseDatas.slice(
    (curPages - 1) * perPageItemCount,
    perPageItemCount * curPages
  );

  return (
    <S.Container>
      <S.Section>
        <S.Div>
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
        <Pagination courseCount={courseDatas.length} />
      </S.Section>
    </S.Container>
  );
};

export default MainPage;
