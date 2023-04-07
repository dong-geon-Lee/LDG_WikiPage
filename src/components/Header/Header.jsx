import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../recoils/modalState";
import { courseState } from "../../recoils/courseState";
import Modals from "../Modals/Modals";
import * as S from "./styles";

const Header = () => {
  const [modals, setModals] = useRecoilState(modalState);
  const courseLists = useRecoilValue(courseState);

  const location = useLocation();
  const params = location.pathname;
  const singlePageId = params.split("/")[1];
  const headerTitle =
    params === "/" ? "메인페이지" : `위키페이지 ${singlePageId}번 강의`;

  const navigate = useNavigate();
  const handleNavigate = () => {
    const courseInfo = courseLists.find(
      (courseItem) => courseItem.id === parseInt(singlePageId)
    );

    navigate(`/${singlePageId}/modify`, { state: courseInfo });
  };

  return (
    <S.Container>
      {modals && <Modals />}
      <S.Div>
        <S.LinkTag to="/">{headerTitle}</S.LinkTag>
        {singlePageId ? (
          <S.Button onClick={handleNavigate}>강의 수정</S.Button>
        ) : (
          <S.Button onClick={() => setModals(true)}>강의 추가</S.Button>
        )}
      </S.Div>
    </S.Container>
  );
};

export default Header;
