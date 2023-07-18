import { FilterByCategoryOptions } from '@/contexts/filterContext/models/filterByCategoryOptions';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

export type FilterContextProps = {
  filterByCategory: FilterByCategoryOptions;
  setFilterByCategory: (category: FilterByCategoryOptions) => void;
  sortBy: SortByOptions;
  setSortBy: (sort: SortByOptions) => void;
};
