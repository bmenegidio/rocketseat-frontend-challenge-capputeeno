import { createContext, ReactNode, useContext, useState } from 'react';

import { FilterByCategoryOptions } from '@/contexts/filterContext/models/filterByCategoryOptions';
import { FilterContextProps } from '@/contexts/filterContext/models/filterContextProps';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

const FilterContext = createContext({} as FilterContextProps);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterByCategory, setFilterByCategory] =
    useState<FilterByCategoryOptions>(FilterByCategoryOptions.ALL);
  const [sortBy, setSortBy] = useState<SortByOptions>(SortByOptions.NEWS);
  const [text, setText] = useState('');

  return (
    <FilterContext.Provider
      value={{
        filterByCategory,
        setFilterByCategory,
        sortBy,
        setSortBy,
        text,
        setText,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
