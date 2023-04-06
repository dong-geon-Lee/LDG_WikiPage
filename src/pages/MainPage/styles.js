import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 10rem;
`;

export const Div = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 3.2rem;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const LinkTag = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.6rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  width: 100%;

  :hover {
    color: gray;
  }
`;

export const Span = styled.span`
  font-size: 3.6rem;
`;

export const Li = styled.li`
  font-size: 2.6rem;
  border-bottom: 1px solid #000;
  display: block;
`;
