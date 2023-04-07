import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";

const WikiContentPage = () => {
  const location = useLocation();
  const { id, title, description, category } = location.state;

  return (
    <S.Container>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{category}</h1>
      <h2>{description}</h2>
    </S.Container>
  );
};

export default WikiContentPage;
