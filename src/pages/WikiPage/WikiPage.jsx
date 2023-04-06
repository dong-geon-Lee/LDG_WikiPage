import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";

const WikiPage = () => {
  const location = useLocation();
  const coursePath = location.pathname.split("/")[1];
  const { id, title, description } = location.state;

  return (
    <S.Container>
      <h1>{id}</h1>
      <h1>제목: {title}</h1>
      <h1>본문: {description}</h1>
    </S.Container>
  );
};

export default WikiPage;
