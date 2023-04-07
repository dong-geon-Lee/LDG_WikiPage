import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";

const WikiPage = ({ courseItems }) => {
  const location = useLocation();
  const { id, title, description, category } = location.state;

  const sameCategoryCourse = courseItems.filter(
    (x) => x.category === category && x.id !== id
  );

  function findWikiKeywords() {
    let keywordLists = [];
    for (const wikiTitle of title.split(" ")) {
      keywordLists.push(
        ...courseItems.filter((x) => x.description.match(wikiTitle))
      );
    }
    return [...new Set(keywordLists)];
  }

  return (
    <S.Container>
      <S.Section>
        <S.Div>
          <S.Title>
            [{id}] {title}
          </S.Title>
          <S.ContentsBox>
            <S.Description>
              {description} 아래는 선행 학습 코스입니다.
            </S.Description>
            {sameCategoryCourse.map((item) => (
              <S.LinkTag key={item.id} to={`/${item.id}`} state={item}>
                ({item.id}) {item.title}
              </S.LinkTag>
            ))}
          </S.ContentsBox>
        </S.Div>
        <S.Footer>
          <S.Text>위키페이지 강의 목록 {findWikiKeywords().length}개</S.Text>
          <S.Box>
            {findWikiKeywords()?.map((item) => (
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
