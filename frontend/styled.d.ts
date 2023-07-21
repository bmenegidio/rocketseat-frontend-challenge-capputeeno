import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      textDark: string;
      textDark2: string;
      textGray: string;
      shapeDarkTooltip: string;
      logo: string;
      white: string;
      bgPrimary: string;
      bgInput: string;
      danger: string;
      success: string;
      orangeLow: string;
      lightGray: string;
      lightBackground: string;
      brandBlue: string;
      bgDivider: string;
      scrollbar: {
        bgTrack: string;
        bgHover: string;
        bgHandle: string;
      };
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
    scrollbarWidth: string;
  }
}
