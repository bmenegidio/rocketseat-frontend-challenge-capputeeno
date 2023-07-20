import { Product } from '@/components/products/models/product';

export interface ProductParsed extends Product {
  categoryLabel: string;
  quantity?: number;
  priceInBrl?: string;
}
