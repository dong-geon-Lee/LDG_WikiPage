import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { courseState } from "../../recoils/courseState";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get(C.PAGE);
  const currentPage = parseInt(searchParams.get(C.PAGE));
  const courseLists = useRecoilValue(courseState);

  const allPagesCount = Math.ceil(courseLists.length / C.PER__PAGE__ITEMQTY);
  const emptyPage = queryPage === C.NULL;
  const notExistPage = queryPage > allPagesCount;

  const handleSelectedPage = (page) => {
    searchParams.set(C.PAGE, page);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (emptyPage || notExistPage) {
      parseInt(searchParams.set(C.PAGE, C.DEFAULT__PAGE));
      setSearchParams(searchParams);
    }
  }, [allPagesCount, searchParams, setSearchParams]);

  return (
    <S.Container>
      <S.PageContents>
        <S.PageBox>
          <S.Button
            disabled={currentPage === C.PAGE__ONE}
            onClick={() => handleSelectedPage(currentPage - 1)}
          >
            <S.Image src={C.LEFT__ARROW} alt={C.LEFT__ARROW} />
          </S.Button>
          {Array.from({ length: allPagesCount }, (_, i) => (
            <S.Pages
              key={i}
              onClick={() => handleSelectedPage(i + 1)}
              active={i + 1 === currentPage}
            >
              {i + 1}
            </S.Pages>
          ))}
          <S.Button
            disabled={currentPage === allPagesCount}
            onClick={() => handleSelectedPage(currentPage + 1)}
          >
            <S.Image src={C.RIGHT__ARROW} alt={C.RIGHT__ARROW} />
          </S.Button>
        </S.PageBox>
      </S.PageContents>
    </S.Container>
  );
};

export default Pagination;
