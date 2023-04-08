import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { courseState } from "../../recoils/courseState";
import {
  findCourseById,
  getCourseCategory,
  searchRelatedCourses,
} from "../../utils/utils";
import * as S from "./styles";
import useExistCourse from "../../hooks/useExistCourse";

const WikiPage = () => {
  const courseLists = useRecoilValue(courseState);
  const location = useLocation();
  const { id, title, description, category } = location.state;

  const sameCourseCategory = getCourseCategory(courseLists, category, id);
  const resultWikiKeyCourse = searchRelatedCourses(title, courseLists);
  const emptyCourse = resultWikiKeyCourse.length === 0;
  useExistCourse(courseLists, id);

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Title>
            [ {id} ] {title}
          </S.Title>
          <S.ContentsBox>
            <S.Description>{description}</S.Description>
            {sameCourseCategory.map((item) => (
              <S.LinkBox key={item.id}>
                <S.LinkId>({item.id})</S.LinkId>
                <S.LinkTag to={`/${item.id}`} state={item}>
                  {item.title}
                </S.LinkTag>
              </S.LinkBox>
            ))}
          </S.ContentsBox>
        </S.Div>

        <S.Footer>
          <S.TextBox>
            <S.Text>
              [ {title},
              <S.Strong> 관련강의 {resultWikiKeyCourse.length}개</S.Strong> ]
            </S.Text>
            {emptyCourse && <S.Small>강의가 없습니다.</S.Small>}
          </S.TextBox>
          <S.Box>
            {resultWikiKeyCourse.map((item) => (
              <S.Small key={item.id}>
                ({item.id}) {item.title}
              </S.Small>
            ))}
          </S.Box>
        </S.Footer>
      </S.Section>
    </S.Container>
  );
};

export default WikiPage;
