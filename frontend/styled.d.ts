import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      textDark: string;
      textDark2: string;
      shapeDarkTooltip: string;
      logo: string;
      white: string;
      bgPrimary: string;
      bgInput: string;
      danger: string;
      orangeLow: string;
      lightGray: string;
      lightBackground: string;
    };
    breakpoints: {
      mobile: string;
    };
    padding: {
      content: {
        desktop: string;
        mobile: string;
      };
    };
  }
}
