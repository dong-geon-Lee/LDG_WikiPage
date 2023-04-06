import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";

const Pagination = ({ courseCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPageItemCount = 5;
  const pagesCount = Math.ceil(courseCount / perPageItemCount);

  const handleSelectedPage = (page) => {
    searchParams.set("page", page || "1");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.get("page") === null) {
      parseInt(searchParams.set("page", "1"));
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  return (
    <S.Container>
      <S.PageContents>
        <S.PageBox>
          {Array.from({ length: pagesCount }, (_, i) => (
            <S.Pages key={i} onClick={() => handleSelectedPage(i + 1)}>
              {i + 1}
            </S.Pages>
          ))}
        </S.PageBox>
      </S.PageContents>
    </S.Container>
  );
};

export default Pagination;
