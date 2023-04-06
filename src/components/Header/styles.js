import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #000;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  margin: 2rem 2rem;
`;

export const Button = styled.button`
  border: none;
  padding: 2rem;
  cursor: pointer;
  background-color: inherit;
  font-size: 2rem;

  &:hover {
    color: #ff6000;
  }
`;
