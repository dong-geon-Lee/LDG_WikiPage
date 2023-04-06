import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 2fr 1fr;
  margin: 0 20rem;
`;

export const Div = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 2.6rem;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

export const Span = styled.span`
  font-size: 3.6rem;
`;

export const Li = styled.li`
  font-size: 3.6rem;
  border-bottom: 1px solid #000;
  cursor: pointer;
  display: block;
  width: 100%;

  &:hover {
    color: gray;
  }
`;
