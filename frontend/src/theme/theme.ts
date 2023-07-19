'use client';

import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '0.5rem',
  colors: {
    textDark: '#41414D',
    textDark2: '#737380',
    shapeDarkTooltip: '#09090A',
    logo: '#5D5D6D',
    white: '#fff',
    bgPrimary: '#F0F0F5',
    bgInput: '#F3F5F6',
    danger: '#DE3838',
    orangeLow: '#FFA585',
    lightGray: '#E9E9F0',
    lightBackground: '#F5F5FA',
    brandBlue: '#115D8C',
    scrollbar: {
      bgTrack: '#f1f1f1',
      bgHover: '#5D5D6D',
      bgHandle: '#888',
    },
  },
  breakpoints: {
    mobile: '968px',
  },
  padding: {
    content: {
      desktop: '20px 160px',
      mobile: '12px 20px',
    },
  },
};
