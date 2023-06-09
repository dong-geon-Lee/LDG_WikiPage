import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  border-bottom: 1px solid #000;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkTag = styled(Link)`
  font-size: 2.2rem;
  margin: 2rem 2rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #ff6000;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 2rem;
  cursor: pointer;
  background-color: inherit;
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #ff6000;
  }
`;
