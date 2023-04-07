import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";
import { courseState } from "../../recoils/courseState";
import { useRecoilValue } from "recoil";

const Pagination = () => {
  const courseLists = useRecoilValue(courseState);
  const [searchParams, setSearchParams] = useSearchParams();
  const perPageItemCount = 5;
  const pagesCount = Math.ceil(courseLists.length / perPageItemCount);

  const handleSelectedPage = (page) => {
    searchParams.set("page", page || "1");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (searchParams.get("page") === null) {
      parseInt(searchParams.set("page", "1"));
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <S.Container>
      <S.PageContents>
        <S.PageBox>
          <S.Button
            disabled={parseInt(searchParams.get("page")) === 1}
            onClick={() =>
              handleSelectedPage(parseInt(searchParams.get("page")) - 1)
            }
          >
            <S.Image src={process.env.PUBLIC_URL + "/left-arrow.svg"} />
          </S.Button>
          {Array.from({ length: pagesCount }, (_, i) => (
            <S.Pages
              key={i}
              onClick={() => handleSelectedPage(i + 1)}
              active={i + 1 === parseInt(searchParams.get("page"))}
            >
              {i + 1}
            </S.Pages>
          ))}
          <S.Button
            disabled={parseInt(searchParams.get("page")) === pagesCount}
            onClick={() =>
              handleSelectedPage(parseInt(searchParams.get("page")) + 1)
            }
          >
            <S.Image src={process.env.PUBLIC_URL + "/right-arrow.svg"} />
          </S.Button>
        </S.PageBox>
      </S.PageContents>
    </S.Container>
  );
};

export default Pagination;
