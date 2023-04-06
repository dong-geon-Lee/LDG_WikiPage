import styled from "styled-components";

export const Container = styled.div``;

export const PageContents = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  font-size: 2rem;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: #edf1d6;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid #000;

  &:hover {
    background-color: #9dc08b;
  }
`;
