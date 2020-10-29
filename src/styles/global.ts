import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-bg.svg';

export default createGlobalStyle`
  :root {
    --green: #04D361;
    --dark-grey: #3a3a3a;
    --grey: #a8a8b3;
    --white: #f0f0f5;
    --white-clean: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--white) url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
