import { CartItem } from '@/contexts/cartContext/models/cartItem';

export type CartContextProps = {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
};
