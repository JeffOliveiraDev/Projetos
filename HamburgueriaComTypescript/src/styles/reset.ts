import { createGlobalStyle } from "styled-components";

export const StyledReset = createGlobalStyle`
  * {
   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
  .App{
    height: 100vh;
  }
`;
