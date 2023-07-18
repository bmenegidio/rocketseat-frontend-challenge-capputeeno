'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/components/providers/styled-components-registry';
import { CartProvider } from '@/contexts/cartContext/cartContext';
import { FilterProvider } from '@/contexts/filterContext/filterContext';
import { apiClient } from '@/services/api';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global-styles';

export const Providers = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apiClient}>
        <FilterProvider>
          <CartProvider>
            <GlobalStyles />
            {children}
          </CartProvider>
        </FilterProvider>
      </ApolloProvider>
    </ThemeProvider>
  </StyledComponentsRegistry>
);
