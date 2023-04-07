import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  overflow: hidden;
  border-radius: 0.4rem;
`;

export const Section = styled.section`
  width: 40rem;
  height: 40rem;
  background-color: #fff;
  position: relative;
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2``;

export const Image = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
  display: block;
  cursor: pointer;
`;

export const Div = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.4rem;
`;

export const Option = styled.option``;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-family: inherit;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 9rem;
`;

export const Span = styled.span``;

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
  font-weight: 600;
  font-family: inherit;

  & + button {
    border: 1px solid #00bdba;
    background-color: #09c6c3;
  }

  :hover {
    color: #1c3c62;
  }
`;
