import { ShoppingBagIcon } from '@/components/icons/shoppingBag';
import { CartBadge } from '@/components/navbar/components/cartBadge';
import { CartContainer } from '@/components/navbar/components/cartContainer';

export function CartControl() {
  return (
    <CartContainer>
      <ShoppingBagIcon />
      <CartBadge>2</CartBadge>
    </CartContainer>
  );
}
