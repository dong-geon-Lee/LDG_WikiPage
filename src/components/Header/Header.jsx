import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../recoils/modalState";
import { courseState } from "../../recoils/courseState";
import { findModifyCourse, showDynamicText } from "../../utils/utils";
import Modals from "../Modals/Modals";
import * as S from "./styles";

const Header = () => {
  const [modals, setModals] = useRecoilState(modalState);
  const courseLists = useRecoilValue(courseState);

  const location = useLocation();
  const headerText = showDynamicText(location);
  const currentPageId = location.pathname.split("/")[1];

  const navigate = useNavigate();
  const handleNavigate = () => {
    const courseInfo = findModifyCourse(courseLists, currentPageId);
    navigate(`/${currentPageId}/modify`, { state: courseInfo });
  };

  const openModals = () => setModals(true);

  return (
    <S.Container>
      {modals && <Modals />}
      <S.Div>
        <S.LinkTag to="/">{headerText}</S.LinkTag>
        {currentPageId ? (
          <S.Button onClick={handleNavigate}>강의 수정</S.Button>
        ) : (
          <S.Button onClick={openModals}>강의 추가</S.Button>
        )}
      </S.Div>
    </S.Container>
  );
};

export default Header;
