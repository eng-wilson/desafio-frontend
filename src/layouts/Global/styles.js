import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(0deg, #f9ba02, #f77e02);
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
