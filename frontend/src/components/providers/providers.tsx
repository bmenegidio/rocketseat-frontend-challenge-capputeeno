'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/components/providers/styled-components-registry';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global-styles';

export const Providers = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);
