import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Section = styled.section`
  padding: 10rem 20rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
`;

export const Label = styled.label`
  font-size: 2.8rem;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 2.8rem;
`;

export const ContentsBox = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  border: 1px solid #000;
  padding: 1.6rem;
`;

export const Description = styled.p`
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

export const LinkTag = styled(Link)`
  color: inherit;
  font-size: 1.6rem;
  display: inline-block;
  width: 100%;
  text-decoration: underline;

  &:hover {
    color: #3366cc;
  }
`;

export const Text = styled.h2`
  text-align: left;
  width: 100%;
`;

export const Footer = styled.footer`
  margin: 4rem 0;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Small = styled.small`
  text-align: left;
  width: 100%;
`;
