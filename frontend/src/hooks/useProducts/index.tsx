import { gql, useQuery } from '@apollo/client';
import { useDeferredValue } from 'react';

import { useFilter } from '@/contexts/filterContext/filterContext';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';
import { AllProductsResponse } from '@/hooks/useProducts/models/allProductsResponse';

export const useProducts = () => {
  const { filterByCategory, sortBy, text, currentPage, perPage } = useFilter();
  const textFilter = useDeferredValue(text);

  const filterParsed = {
    ...(filterByCategory && { category: filterByCategory }),
  };

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
    query Products(
      $perPage: Int!
      $currentPage: Int!
      $filter: ProductFilter!
      $sortField: String!
      $sortOrder: String!
    ) {
      allProducts(
        perPage: $perPage
        page: $currentPage
        filter: $filter
        sortField: $sortField
        sortOrder: $sortOrder
      ) {
        id
        name
        price_in_cents
        image_url
      }
      _allProductsMeta(filter: $filter) {
        count
      }
    }
  `;

  const {
    loading,
    error,
    data: allProductsResponse,
  } = useQuery<AllProductsResponse>(PRODUCTS, {
    variables: {
      perPage,
      currentPage,
      filter: filterParsed,
      sortField: sortParsed.field,
      sortOrder: sortParsed.order,
    },
  });

  let filteredProducts = allProductsResponse?.allProducts || [];
  if (filteredProducts.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(textFilter.toLowerCase()),
    );
  }

  return {
    loading,
    error,
    products: filteredProducts,
    totalProducts: allProductsResponse?._allProductsMeta?.count || 0,
  };
};
