import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Wrapper from '../components/Wrapper';

const H1 = styled.h1`
  max-width: 36rem;
`;

export default function IndexPage() {
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Next.js + Styled Components &mdash; Ready to Go!</title>
      </Head>

      <Wrapper>
        <H1>Next.js + Styled Components Boilerplate</H1>
      </Wrapper>
    </>
  );
}
