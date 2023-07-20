import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { ButtonFinish } from '@/components/cart/orderSummary/buttonFinish';
import { DividerWithMargin } from '@/components/cart/orderSummary/dividerWithMargin';
import { OrderSummaryContainer } from '@/components/cart/orderSummary/orderSummaryContainer';
import { OrderSummaryContent } from '@/components/cart/orderSummary/orderSummaryContent';
import { SubTitle } from '@/components/cart/orderSummary/subTitle';
import { Title } from '@/components/cart/orderSummary/title';
import { Total } from '@/components/cart/orderSummary/total';
import { useCartContext } from '@/contexts/cartContext/cartContext';
import { convertPriceInCentsToBrl } from '@/utils/converters';

export const OrderSummary = () => {
  const freightFeeInCents = 4000;
  const router = useRouter();
  const { subTotalProductsInBrl, subTotalProductsInCents, emptyTheCart } =
    useCartContext();

  function sumTotalWithFreightAndConvertToBrl() {
    return convertPriceInCentsToBrl(
      subTotalProductsInCents + freightFeeInCents,
    );
  }

  function handleFinish() {
    router.push('/products');
    toast('Compra finalizada com sucesso', { type: 'success' });
    emptyTheCart();
  }

  return (
    <OrderSummaryContainer>
      <OrderSummaryContent>
        <section>
          <Title>Resumo do Pedido</Title>
          <div>
            <SubTitle>Subtotal de produtos</SubTitle>
            <SubTitle>{subTotalProductsInBrl}</SubTitle>
          </div>
          <div>
            <SubTitle>Entrega</SubTitle>
            <SubTitle>R$ 40,00</SubTitle>
          </div>
          <DividerWithMargin />
          <div>
            <Total>Total</Total>
            <Total>{sumTotalWithFreightAndConvertToBrl()}</Total>
          </div>
          <ButtonFinish onClick={handleFinish}>Finalizar a compra</ButtonFinish>
        </section>

        <section>
          <ul>
            <li>
              <a href='#'>Ajuda</a>
            </li>
            <li>
              <a href='#'>Reembolsos</a>
            </li>
            <li>
              <a href='#'>Entregas e frete</a>
            </li>
            <li>
              <a href='#'>Trocas e devoluções</a>
            </li>
          </ul>
        </section>
      </OrderSummaryContent>
    </OrderSummaryContainer>
  );
};
