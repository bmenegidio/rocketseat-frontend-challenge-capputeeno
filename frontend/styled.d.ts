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
    };
  }
}
