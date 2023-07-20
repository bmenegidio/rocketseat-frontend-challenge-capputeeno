'use client';

import { CartItems } from '@/components/cart/cartItems';
import { ContentFlex } from '@/components/cart/cartItems/contentFlex';
import { OrderSummary } from '@/components/cart/orderSummary';
import { PageContentContainer } from '@/components/pageContentContainer';

export default function CartPage() {
  return (
    <PageContentContainer>
      <ContentFlex>
        <CartItems />
        <OrderSummary />
      </ContentFlex>
    </PageContentContainer>
  );
}
