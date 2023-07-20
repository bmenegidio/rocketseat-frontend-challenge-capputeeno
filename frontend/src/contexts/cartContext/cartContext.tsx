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
    const indexOfItem = cartItems.findIndex((item) => item.id === cartItem.id);
    const itemAlreadyAdded = indexOfItem > -1;

    if (itemAlreadyAdded) {
      cartItems[indexOfItem].quantity = cartItems[indexOfItem].quantity! + 1;
    }

    if (!itemAlreadyAdded) {
      cartItems.push({
        ...cartItem,
        quantity: 1,
      });
    }

    setCartItems([...cartItems]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
