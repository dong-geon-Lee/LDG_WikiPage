import React from "react";
import * as S from "./styles";
import { courseDatas } from "../../data/mockData";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const filteredCourseItmes = courseDatas.slice();
  const perPageItemsCount = filteredCourseItmes;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, setSearchParams);

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          {courseDatas.map((item) => (
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
