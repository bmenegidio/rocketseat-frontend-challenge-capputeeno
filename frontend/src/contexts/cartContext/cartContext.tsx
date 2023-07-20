import { createContext, ReactNode, useContext } from 'react';

import { CartContextProps } from '@/contexts/cartContext/models/cartContextProps';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProductParsed } from '@/hooks/useProduct/models/productParsed';

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addCartItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useLocalStorage<ProductParsed[]>(
    'cart',
    [],
  );

  function addCartItem(cartItem: ProductParsed) {
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
