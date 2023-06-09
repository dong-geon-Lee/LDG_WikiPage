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
  gap: 1.8rem;
  font-size: 2rem;
`;

export const Button = styled.button`
  border-radius: 0.4rem;
  border: 1px solid #c0c0c0;
  width: 4rem;
  height: 4rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#f8f9fa" : "#d1d1d1")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: 1px solid #c0c0c0;
  background-color: ${(props) => (props.active ? "#dee2e6" : "#d1d1d1")};
  cursor: pointer;
`;
