import { ShoppingBagIcon } from '@/components/icons/shoppingBag';
import { CartBadge } from '@/components/navbar/components/cartBadge';
import { CartContainer } from '@/components/navbar/components/cartContainer';
import { useCartContext } from '@/contexts/cartContext/cartContext';

export function CartControl() {
  const { cartItems } = useCartContext();
  return (
    <CartContainer>
      <ShoppingBagIcon />
      {cartItems.length > 0 && <CartBadge>{cartItems.length}</CartBadge>}
    </CartContainer>
  );
}
