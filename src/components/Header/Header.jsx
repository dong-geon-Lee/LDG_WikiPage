import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.Div>
        <S.Title>WikiPage 코스 목록</S.Title>
        <S.Button>강의 추가하기</S.Button>
      </S.Div>
    </S.Container>
  );
};

export default Header;
