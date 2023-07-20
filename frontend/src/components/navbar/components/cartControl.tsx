import { useRouter } from 'next/navigation';

import { ShoppingBagIcon } from '@/components/icons/shoppingBag';
import { CartBadge } from '@/components/navbar/components/cartBadge';
import { CartContainer } from '@/components/navbar/components/cartContainer';
import { useCartContext } from '@/contexts/cartContext/cartContext';

export function CartControl() {
  const { cartItems } = useCartContext();
  const router = useRouter();

  function handleNavigateToCart() {
    router.push('/cart');
  }

  return (
    <CartContainer onClick={handleNavigateToCart}>
      <ShoppingBagIcon />
      {cartItems.length > 0 && <CartBadge>{cartItems.length}</CartBadge>}
    </CartContainer>
  );
}
