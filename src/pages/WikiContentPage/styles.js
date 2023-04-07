import styled from "styled-components";

export const Container = styled.div``;

export const Section = styled.section`
  padding: 10rem 20rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
`;

export const EditTitleBox = styled.div`
  width: 100%;
  text-align: left;
  font-size: 2.8rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 2.8rem;
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 2.8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
`;

export const EditDesBox = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;
  border: 1px solid #000;
  padding: 1.6rem;
`;

export const Description = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;
  border: 1px solid #000;
  padding: 1.6rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 12rem;
  margin-top: 0.4rem;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const Button = styled.button`
  flex: 1;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  background-color: #d1d1d1;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-family: inherit;
  font-weight: 600;
  margin: 2.4rem 0;

  & + button {
    border: 1px solid #00bdba;
    background-color: #09c6c3;
  }

  &:hover {
    color: #1c3c62;
  }
`;
