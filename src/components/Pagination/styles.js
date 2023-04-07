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
  gap: 2.4rem;
  font-size: 2rem;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: 1px solid #000;
  background-color: ${(props) => (props.active ? "#adb5bd" : "#edf1d6")};
  cursor: ${(props) => (props.active ? "not-allowed" : "pointer")};
`;
