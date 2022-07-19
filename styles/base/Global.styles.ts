import styled, { createGlobalStyle } from "styled-components";
import screen from "@configs/media";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: grayscale;
    -moz-font-smoothing: grayscale;
    font-weight: 400;
    margin-top: 0 !important;
  }

  body {
    position: relative;
    font-family: 'Inter', sans-serif;
    line-height: 170%;
    font-size: 16px;
    color: #0C215A;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow: visible;
  }

  a {
    text-decoration: none;
  }

  a,
  input,
  input::placeholder,
  button,
  textarea {
    color: inherit;
    font-family: inherit;
  }
  
  picture {
    display: block;
  }

  img {
    max-width: 100%;
    user-select: none;
    color: transparent;
  }

  button {
    border: none;
    outline: none;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
  }

  // Chrome, Safari, Edge, Opera styles
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox styles
  input[type=number] {
    -moz-appearance: textfield;
  }

  // Webkit autocomplete background remove
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 5000s !important;
  }

  // Main styles
  main {
    /* padding-top: 92px; */
    @media ${screen.lp} {
      /* padding-top: 78px; */
    }
    @media ${screen.md} {
      /* padding-top: 78px; */
    }
  }

  // Gatsby styles
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    outline: none !important;
  }

  #___gatsby {
    outline: none !important;
  }

  // Heading styles
  h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.3;
    color: #0C215A;
    @media ${screen.lp} {
      font-size: 64px;
      line-height: 1.1;
      letter-spacing: -0.05em;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    color: #0C215A;
    @media ${screen.lp} {
      font-size: 44px;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: #0C215A;
    @media ${screen.lp} {
      font-size: 30px;
      line-height: 1.3;
      letter-spacing: unset;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    color: #0C215A;
    @media ${screen.lp} {
      font-size: 24px;
    }
  }

  h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    color: #0C215A;
    @media ${screen.lp} {
      font-size: 20px;
      letter-spacing: -0.02em;
    }
  }

  h6 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    color: #0C215A;
    @media ${screen.lp} {
      font-size: 14px;
      letter-spacing: -0.02em;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 6.25%;
  max-width: 1259px;
  box-sizing: content-box;
`;
