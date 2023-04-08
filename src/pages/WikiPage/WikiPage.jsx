import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { courseState } from "../../recoils/courseState";
import { findOtherCategory, searchWikiKeywords } from "../../utils/utils";
import * as S from "./styles";

const WikiPage = () => {
  const courseLists = useRecoilValue(courseState);
  const location = useLocation();
  const { id, title, description, category } = location.state;
  const sameCategoryCourse = findOtherCategory(courseLists, category, id);
  const findWikiKeywords = searchWikiKeywords(title, courseLists);

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Title>
            [ {id} ] {title}
          </S.Title>
          <S.ContentsBox>
            <S.Description>{description}</S.Description>
            {sameCategoryCourse.map((item) => (
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
              <S.Strong> 관련강의 {findWikiKeywords.length}개</S.Strong> ]
            </S.Text>
            {findWikiKeywords.length === 0 && <S.Text>강의가 없습니다.</S.Text>}
          </S.TextBox>
          <S.Box>
            {findWikiKeywords.map((item) => (
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
