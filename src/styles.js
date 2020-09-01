import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-black-rgba: rgba(0,0,0,.75);
    --clr-light-black: #151515;
    --clr-medium-black: #111111;
    --clr-black: #000000;
    --clr-white: #ffffff;
    --clr-gray: #c1c1c1;
    --clr-yellow: #f5c632;

    --fw-300: 300;
    --fw-400: 400;
    --fw-500: 500;
    --fw-700: 700;
  }
    
  * {
    outline: none;
  }

  @keyframes run {
    0%,
    100% {
      left: 0;
    }
  
    50% {
      left: -1.5rem;
    }
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--clr-light-black);
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 1.4;
    font-size: 16px;
    color: var(--clr-gray);
    font-weight: var(--fw-400);
  }

  main {
    width: 1200px;
    min-height: 100vh;
    max-width: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  figure + figure {
    margin-left: 10px;
  }
`

export default GlobalStyle
