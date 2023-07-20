import { createContext, ReactNode, useContext } from 'react';

import { CartContextProps } from '@/contexts/cartContext/models/cartContextProps';
import { UpdateProductQuantityProps } from '@/contexts/cartContext/models/updateProductQuantityProps';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ProductParsed } from '@/hooks/useProduct/models/productParsed';
import { convertPriceInCentsToBrl } from '@/utils/converters';

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const MAX_PRODUCTS_QUANTITY_PER_CART = 10;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useLocalStorage<ProductParsed[]>(
    'cart',
    [],
  );
  const subTotalProductsInBrl = getSubTotalProductsInBrl();

  function addCartItem(cartItem: ProductParsed): boolean {
    const indexOfItem = cartItems.findIndex((item) => item.id === cartItem.id);
    const itemAlreadyAdded = indexOfItem > -1;

    if (itemAlreadyAdded) {
      if (cartItems[indexOfItem].quantity! === MAX_PRODUCTS_QUANTITY_PER_CART) {
        return false;
      }

      cartItems[indexOfItem].quantity = cartItems[indexOfItem].quantity! + 1;
    }

    if (!itemAlreadyAdded) {
      cartItems.push({
        ...cartItem,
        quantity: 1,
      });
    }

    setCartItems([...cartItems]);
    return true;
  }

  function getSubTotalProductsInBrl() {
    const subTotalInCents = cartItems.reduce(
      (acc, product) => (acc += product.price_in_cents * product.quantity!),
      0,
    );
    return convertPriceInCentsToBrl(subTotalInCents);
  }

  function updateProductQuantity({
    productId,
    quantity,
  }: UpdateProductQuantityProps) {
    const indexOfItem = cartItems.findIndex((item) => item.id === productId);
    cartItems[indexOfItem].quantity = quantity;
    setCartItems([...cartItems]);
  }

  function deleteProduct(productId: string) {
    setCartItems([...cartItems.filter((item) => item.id !== productId)]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        subTotalProductsInBrl,
        updateProductQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
