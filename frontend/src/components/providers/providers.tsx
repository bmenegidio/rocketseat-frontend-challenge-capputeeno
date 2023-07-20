'use client';

import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
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
            <ToastContainer
              position='bottom-left'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
            {children}
          </CartProvider>
        </FilterProvider>
      </ApolloProvider>
    </ThemeProvider>
  </StyledComponentsRegistry>
);
