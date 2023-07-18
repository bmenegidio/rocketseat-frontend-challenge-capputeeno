'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/components/providers/styled-components-registry';
import { CartProvider } from '@/contexts/cartContext/cartContext';
import { FilterProvider } from '@/contexts/filterContext/filterContext';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global-styles';

export const Providers = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <CartProvider>
          <GlobalStyles />
          {children}
        </CartProvider>
      </FilterProvider>
    </ThemeProvider>
  </StyledComponentsRegistry>
);
