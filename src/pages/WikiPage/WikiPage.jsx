import React from "react";
import { useLocation } from "react-router-dom";
import { courseDatas } from "../../data/mockData";
import * as S from "./styles";

const WikiPage = () => {
  const location = useLocation();
  const { id, title, description, category } = location.state;

  const sameCategoryCourse = courseDatas.filter(
    (x) => x.category === category && x.id !== id
  );

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
          <S.Text>위키페이지 제목</S.Text>
          {/* {wikiKeywords.map((item, index) => (
            <S.Description key={index}>
              [{index + 1}] : {item}
            </S.Description>
          ))} */}
        </S.Footer>
      </S.Section>
    </S.Container>
  );
};

export default WikiPage;
