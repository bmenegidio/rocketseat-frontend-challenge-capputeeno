import { createContext, ReactNode, useContext } from 'react';

import { CartContextProps } from '@/contexts/cartContext/models/cartContextProps';
import { CartItem } from '@/contexts/cartContext/models/cartItem';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addCartItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  function addCartItem(cartItem: CartItem) {
    setCartItems([
      ...cartItems,
      {
        ...cartItem,
      },
    ]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
