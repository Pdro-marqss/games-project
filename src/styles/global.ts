import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      height: 100%;
      min-height: 100%;
   }

   body {
      background: ${props => props.theme['gray-500']};
      color: ${props => props.theme.white};
      font-weight: 400;
      -webkit-font-smoothing: antialiased;

      min-height: 100%;
      display: flex;
      flex-direction: column;
   }

   body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
   }

   p, h1, h2 {
      font-weight: 400;
   }

   ul {
      list-style: none;

   }
`;