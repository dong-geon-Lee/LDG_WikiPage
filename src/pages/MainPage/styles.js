import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 2rem;
`;

export const Div = styled.div`
  padding: 10rem;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 3.2rem;
`;

export const Headline = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 3fr 1fr;
  justify-items: left;
  align-items: center;
  gap: 2.6rem;
  width: 100%;
  border-bottom: 3px solid #1c3c62;

  & label {
    margin-bottom: 1rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
`;

export const LinkTag = styled(Link)`
  display: grid;
  grid-template-columns: 0.4fr 3fr 1fr;
  justify-items: left;
  align-items: center;
  gap: 2.6rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  width: 100%;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #14d6c6;
    width: 100%;
  }

  &:hover span {
    color: #000;
  }

  &:hover li {
    border-bottom: 1px solid #000;
  }

  &:hover label {
    color: #000;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  border-bottom: 1px solid transparent;
`;

export const Li = styled.li`
  display: block;
  font-size: 2.4rem;
  border-bottom: 1px solid transparent;
`;

export const Label = styled.label`
  display: block;
  font-size: 2rem;
  border-bottom: 1px solid transparent;
`;
