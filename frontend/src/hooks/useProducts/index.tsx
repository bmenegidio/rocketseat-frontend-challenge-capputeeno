import { gql, useQuery } from '@apollo/client';

import { useFilter } from '@/contexts/filterContext/filterContext';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';
import { AllProductsResponse } from '@/hooks/useProducts/models/allProductsResponse';

export const useProducts = () => {
  const { filterByCategory, sortBy } = useFilter();

  let filterParsed = '{}';
  if (filterByCategory) {
    filterParsed = `{ category: "${filterByCategory}" }`;
  }

  const parseSort = {
    [SortByOptions.NEWS]: {
      field: 'created_at',
      order: 'ASC',
    },
    [SortByOptions.BIGGEST_PRICE]: {
      field: 'price_in_cents',
      order: 'DSC',
    },
    [SortByOptions.MINOR_PRICE]: {
      field: 'price_in_cents',
      order: 'ASC',
    },
    [SortByOptions.POPULARITY]: {
      field: 'sales',
      order: 'DSC',
    },
  };
  const sortParsed = parseSort[sortBy];
  const PRODUCTS = gql`
    query {
      allProducts (filter: ${filterParsed}, sortField: "${sortParsed.field}", sortOrder: "${sortParsed.order}") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `;
  const { loading, error, data } = useQuery<AllProductsResponse>(PRODUCTS);

  return {
    loading,
    error,
    products: data?.allProducts || [],
  };
};
