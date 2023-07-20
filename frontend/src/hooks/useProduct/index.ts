import { gql, useQuery } from '@apollo/client';

import { ProductParsed } from '@/hooks/useProduct/models/productParsed';
import { ProductResponse } from '@/hooks/useProduct/models/productResponse';
import { getCategoryNameByCode } from '@/hooks/useProduct/util/getCategoryNameByCode';
import { convertPriceInCentsToBrl } from '@/utils/converters';

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

  const product: ProductParsed = productResponse?.Product
    ? {
        ...productResponse.Product,
        categoryLabel: getCategoryNameByCode(productResponse.Product.category),
        priceInBrl: convertPriceInCentsToBrl(
          productResponse.Product.price_in_cents,
        ),
      }
    : ({} as ProductParsed);
  return {
    product,
    loading,
    error,
  };
};
