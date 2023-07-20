import { ProductParsed } from '@/hooks/useProduct/models/productParsed';

export type CartContextProps = {
  cartItems: ProductParsed[];
  addCartItem: (item: ProductParsed) => void;
};
