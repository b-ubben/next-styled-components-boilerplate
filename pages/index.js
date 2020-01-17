import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Wrapper from '../components/Wrapper';

const H1 = styled.h1`
  max-width: 36rem;
`;

const Card = styled.div`
  background: #fafafa;
  color: #010101;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.11);
  padding: 1rem;
`;

export default () => {
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Next.js + Styled Components &mdash; Ready to Go!</title>
      </Head>

      <Wrapper>
        <H1>Next.js + Styled Components Boilerplate</H1>

        <Card>
          Powerful CSS-in-JS solution, beloved by many!
          <br />
          Check out&nbsp;
          <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
            their website
          </a>
        </Card>
      </Wrapper>
    </>
  );
};
