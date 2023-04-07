import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 36rem;
  height: 36rem;
  background-color: #fff;
  position: relative;
  padding: 2rem 4rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Div = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.4rem;
`;

export const Option = styled.option``;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
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
  padding: 0.6rem;
  cursor: pointer;
`;
