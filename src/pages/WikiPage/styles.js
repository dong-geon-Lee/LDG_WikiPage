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
  white-space: nowrap;
  color: #1c3c62;
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
  margin-bottom: 1.6rem;
  color: #797979;
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const LinkId = styled.small``;

export const LinkTag = styled(Link)`
  color: inherit;
  font-size: 1.4rem;
  display: inline-block;
  /* width: 100%; */
  text-decoration: underline;
  color: #862e9c;
  display: block;
  line-height: 2;

  &:hover {
    color: #3366cc;
  }
`;

export const TextBox = styled.div`
  margin-top: 2rem;
`;

export const Text = styled.h2`
  text-align: left;
  width: 100%;
  font-weight: 600;
`;

export const Strong = styled.strong`
  color: #4263eb;
`;

export const Footer = styled.footer`
  margin: 4rem 0;
  border-top: 3px solid #14d6c6;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Small = styled.small`
  text-align: left;
  width: 100%;
  margin-top: 1rem;
  color: #495057;
`;
