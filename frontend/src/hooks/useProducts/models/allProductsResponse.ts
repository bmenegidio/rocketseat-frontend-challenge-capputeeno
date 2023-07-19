import { Product } from '@/components/products/models/product';

export type AllProductsResponse = {
  allProducts: Product[];
  _allProductsMeta: {
    count: number;
  };
};
