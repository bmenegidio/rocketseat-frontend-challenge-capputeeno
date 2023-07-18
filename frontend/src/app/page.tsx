'use client';

import { FilterBar } from '@/components/filterBar';
import { PageContentContainer } from '@/components/pageContentContainer';
import { ProductsList } from '@/components/products/list';

export default function Home() {
  return (
    <PageContentContainer>
      <FilterBar />
      <ProductsList />
    </PageContentContainer>
  );
}
