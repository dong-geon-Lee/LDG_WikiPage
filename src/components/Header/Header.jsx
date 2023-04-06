import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const params = location.pathname;

  const headerTitle =
    params === "/" ? "메인페이지" : `위키페이지 ${params.split("/")[1]}번 강의`;

  return (
    <S.Container>
      <S.Div>
        <S.LinkTag to="/">{headerTitle}</S.LinkTag>
        <S.Button>강의 추가하기</S.Button>
      </S.Div>
    </S.Container>
  );
};

export default Header;
