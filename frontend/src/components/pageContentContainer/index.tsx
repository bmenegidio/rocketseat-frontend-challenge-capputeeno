import { ReactNode } from 'react';

import { ContentContainerStyled } from '@/components/pageContentContainer/components/contentContainerStyled';

export const PageContentContainer = ({ children }: { children: ReactNode }) => (
  <ContentContainerStyled>{children}</ContentContainerStyled>
);
