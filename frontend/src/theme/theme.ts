'use client';

import { DefaultTheme } from 'styled-components';

const SCROLLBAR_WIDTH = '9px';

export const theme: DefaultTheme = {
  borderRadius: '0.5rem',
  colors: {
    textDark: '#41414D',
    textDark2: '#737380',
    textGray: '#617480',
    shapeDarkTooltip: '#09090A',
    logo: '#5D5D6D',
    white: '#fff',
    bgPrimary: '#F0F0F5',
    bgInput: '#F3F5F6',
    danger: '#DE3838',
    success: '#51B853',
    orangeLow: '#FFA585',
    lightGray: '#E9E9F0',
    lightBackground: '#F5F5FA',
    brandBlue: '#115D8C',
    bgDivider: '#DCE2E5',
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
      mobile: `12px calc(20px + ${SCROLLBAR_WIDTH}) 12px 20px`,
    },
  },
  scrollbarWidth: SCROLLBAR_WIDTH,
};
