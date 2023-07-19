import { gql, useQuery } from '@apollo/client';

import { Product } from '@/components/products/models/product';
import { ProductResponse } from '@/hooks/useProduct/models/productResponse';

export const useProduct = (productId: string) => {
  const PRODUCT_BY_ID = gql`
    query Product($id: ID!) {
      Product(id: $id) {
        id
        name
        description
        image_url
        category
        price_in_cents
      }
    }
  `;
  const {
    loading,
    error,
    data: productResponse,
  } = useQuery<ProductResponse>(PRODUCT_BY_ID, {
    variables: {
      id: productId,
    },
  });

  return {
    product: productResponse?.Product || ({} as Product),
    loading,
    error,
  };
};
