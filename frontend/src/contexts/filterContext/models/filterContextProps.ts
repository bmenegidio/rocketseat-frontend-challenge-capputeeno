import { FilterByCategoryOptions } from '@/contexts/filterContext/models/filterByCategoryOptions';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

export type FilterContextProps = {
  filterByCategory: FilterByCategoryOptions;
  setFilterByCategory: (category: FilterByCategoryOptions) => void;
  sortBy: SortByOptions;
  setSortBy: (sort: SortByOptions) => void;
  text: string;
  setText: (text: string) => void;
  currentPage: number;
  setPage: (page: number) => void;
  perPage: number;
};
