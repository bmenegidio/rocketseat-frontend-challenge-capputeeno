import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { FilterByCategoryOptions } from '@/contexts/filterContext/models/filterByCategoryOptions';
import { FilterContextProps } from '@/contexts/filterContext/models/filterContextProps';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

const FilterContext = createContext({} as FilterContextProps);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterByCategory, setFilterByCategory] =
    useState<FilterByCategoryOptions>(FilterByCategoryOptions.ALL);
  const [sortBy, setSortBy] = useState<SortByOptions>(SortByOptions.NEWS);
  const [text, setText] = useState('');
  const [currentPage, setPage] = useState(0);
  const PER_PAGE = 12;

  useEffect(() => {
    setPage(0);
  }, [filterByCategory, sortBy]);

  return (
    <FilterContext.Provider
      value={{
        filterByCategory,
        setFilterByCategory,
        sortBy,
        setSortBy,
        text,
        setText,
        currentPage,
        setPage,
        perPage: PER_PAGE,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
