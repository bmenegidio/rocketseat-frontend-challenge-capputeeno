import { FilterByCategory } from '@/components/filterBar/filterByCategory';
import { FilterContainer } from '@/components/filterBar/filterContainer';
import { SortBy } from '@/components/filterBar/sortBy';

export const FilterBar = () => (
  <FilterContainer>
    <FilterByCategory />
    <SortBy />
  </FilterContainer>
);
