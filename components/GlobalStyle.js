import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: rgb(219, 112, 147);

    &:focus,
    &:hover {
      color: rgb(225, 100, 125);
    }
  }

  body {
    background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
    color: #fafafa;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    padding: 0;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
