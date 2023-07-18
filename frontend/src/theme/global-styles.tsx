import { Saira } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    background: ${(props) => props.theme.colors.bgPrimary};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${saira.style.fontFamily};
    font-style: ${saira.style.fontStyle};
    font-weight: 400;
  }
`;
