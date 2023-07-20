'use client';

import { BackButton } from '@/components/backButton';
import { Button } from '@/components/cart/cartItems/button';
import { CardContainer } from '@/components/cart/cartItems/cardContainer';
import { CardContent } from '@/components/cart/cartItems/cardContent';
import { CardDescription } from '@/components/cart/cartItems/cardDescription';
import { CardtItem } from '@/components/cart/cartItems/cardtItem';
import { CardtItemsContainer } from '@/components/cart/cartItems/cardtItemsContainer';
import { CardTitle } from '@/components/cart/cartItems/cardTitle';
import { ContentFlex } from '@/components/cart/cartItems/contentFlex';
import { Image } from '@/components/cart/cartItems/image';
import { ImageContainer } from '@/components/cart/cartItems/imageContainer';
import { ItemPrice } from '@/components/cart/cartItems/itemPrice';
import { Select } from '@/components/cart/cartItems/select';
import { SubTitle, SubTitleStrong } from '@/components/cart/cartItems/subTitle';
import { Title } from '@/components/cart/cartItems/title';
import { OrderSummaryContainer } from '@/components/cart/orderSummaryContainer';
import { TrashIcon } from '@/components/icons/trash';
import { PageContentContainer } from '@/components/pageContentContainer';
import {
  MAX_PRODUCTS_QUANTITY_PER_CART,
  useCartContext,
} from '@/contexts/cartContext/cartContext';
import { UpdateProductQuantityProps } from '@/contexts/cartContext/models/updateProductQuantityProps';

export default function CartPage() {
  const {
    cartItems,
    subTotalProductsInBrl,
    updateProductQuantity,
    deleteProduct,
  } = useCartContext();

  function handleChangeProductQuantity({
    productId,
    quantity,
  }: UpdateProductQuantityProps) {
    updateProductQuantity({
      productId,
      quantity,
    });
  }

  return (
    <PageContentContainer>
      <ContentFlex>
        <CardtItemsContainer>
          <BackButton route={'/products'} />
          <Title>Seu Carrinho</Title>
          <SubTitle>
            Total ({cartItems.length} produtos){' '}
            <SubTitleStrong>{subTotalProductsInBrl}</SubTitleStrong>
          </SubTitle>

          <CardContainer>
            {cartItems.map((item) => (
              <CardtItem key={item.id}>
                <ImageContainer>
                  <Image src={item.image_url} alt={item.name} />
                </ImageContainer>
                <CardContent>
                  <div>
                    <div className='row'>
                      <CardTitle>{item.name}</CardTitle>
                      <Button onClick={() => deleteProduct(item.id)}>
                        <TrashIcon />
                      </Button>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </div>

                  <div className='row'>
                    <Select
                      value={item.quantity}
                      onChange={(event) =>
                        handleChangeProductQuantity({
                          productId: item.id,
                          quantity: Number(event.target.value),
                        })
                      }
                    >
                      {Array.from(
                        { length: MAX_PRODUCTS_QUANTITY_PER_CART },
                        (_, index) => index + 1,
                      ).map((quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </Select>
                    <ItemPrice>{item.priceInBrl}</ItemPrice>
                  </div>
                </CardContent>
              </CardtItem>
            ))}
          </CardContainer>
        </CardtItemsContainer>
      </ContentFlex>
    </PageContentContainer>
  );
}
