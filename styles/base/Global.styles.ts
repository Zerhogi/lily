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
    font-family: 'Overpass', sans-serif;
    line-height: 170%;
    font-size: 16px;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow: visible;
    background-color: rgba(0,0,0,0.99);
    @media ${screen.md} {
      font-size: 18px;
    }
    main{
      overflow: hidden;
    }
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

`;

export const Container = styled.div`
  padding: 0 10px;
  max-width: 1259px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  @media ${screen.sm} {
    padding: 0 60px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  @media ${screen.lp} {
    font-size: 3rem;
  }
  @media ${screen.md} {
    font-size: 4rem;
  }
`;
