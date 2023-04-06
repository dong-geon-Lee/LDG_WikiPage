import React from "react";
import * as S from "./styles";
import { courseDatas } from "../../data/mockData";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Div>
          {courseDatas.map((item) => (
            <S.Ul key={item.id}>
              <S.Span>[{item.id}]</S.Span>
              <S.Li>{item.title}</S.Li>
            </S.Ul>
          ))}
        </S.Div>

        <Link>다음 페이지로 이동</Link>
      </S.Section>
    </S.Container>
  );
};

export default MainPage;
