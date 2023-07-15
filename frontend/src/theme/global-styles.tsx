import { Saira } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const saira = Saira({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${saira.style.fontFamily};
    font-style: ${saira.style.fontStyle};
    font-weight: 400;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
