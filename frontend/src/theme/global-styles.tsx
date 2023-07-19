import { Saira } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const GlobalStyles = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 9px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.scrollbar.bgTrack};
    box-shadow: inset 0 0 5px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.scrollbar.bgHandle};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.scrollbar.bgHover};
  }

  html {
    /* Fix css move issue */
    overflow-x: hidden;
    margin-right: calc(-1 * (100vw - 100%));
  }

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
