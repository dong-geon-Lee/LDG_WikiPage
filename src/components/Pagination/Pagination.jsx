import React from "react";
import * as S from "./styles";

const Pagination = ({ courseCount }) => {
  const perPageItemCount = 5;
  const pagesCount = Math.ceil(courseCount / perPageItemCount);
  const pages = Array.from({ length: pagesCount }, (_, i) => (
    <S.Pages>{i + 1}</S.Pages>
  ));

  return (
    <S.Container>
      <S.PageContents>
        <S.PageBox>{pages}</S.PageBox>
      </S.PageContents>
    </S.Container>
  );
};

export default Pagination;
