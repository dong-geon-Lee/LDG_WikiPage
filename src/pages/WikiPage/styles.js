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
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.6rem;
  display: inline-block;
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;
  gap: 2.4rem;
`;

export const Text = styled.h2`
  text-align: left;
  width: 100%;
`;
