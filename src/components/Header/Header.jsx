import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const headerTitle = location.pathname === "/" ? "메인페이지" : "위키페이지";

  return (
    <S.Container>
      <S.Div>
        <S.Title>{headerTitle}</S.Title>
        <S.Button>강의 추가하기</S.Button>
      </S.Div>
    </S.Container>
  );
};

export default Header;
