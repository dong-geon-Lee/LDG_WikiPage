import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";

const WikiPage = () => {
  const location = useLocation();
  const { id, title, description } = location.state;

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Title>
            [{id}] {title}
          </S.Title>
          <S.Description>{description}</S.Description>
        </S.Div>
      </S.Section>
    </S.Container>
  );
};

export default WikiPage;
