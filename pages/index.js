import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Wrapper from '../components/Wrapper';

const H1 = styled.h1`
  max-width: 36rem;
`;

const Figure = styled.figure`
  img {
    margin: 1rem auto;
    max-width: 150px;
  }

  figcaption {
    background: #fafafa;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
    color: #3a3a3a;
    padding: 1rem 2rem;
  }
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

        <Figure>
          <img src="https://www.styled-components.com/static/logo.png" alt="styled-components" />

          <figcaption>
            Powerful CSS-in-JS solution, beloved by many!
            <br />
            Check out {''}
            <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
              their website
            </a>
          </figcaption>
        </Figure>
      </Wrapper>
    </>
  );
};
