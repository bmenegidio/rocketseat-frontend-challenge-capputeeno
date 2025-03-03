'use client';

import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

import { BackButton } from '@/components/backButton';
import { ShoppingBagWhiteIcon } from '@/components/icons/shoppingBagWhite';
import { PageContentContainer } from '@/components/pageContentContainer';
import { AddProduct } from '@/components/product/addProduct';
import { Container } from '@/components/product/container';
import { DescriptionContent } from '@/components/product/descriptionContent';
import { DescriptionTitle } from '@/components/product/descriptionTitle';
import { Image, ImageContainer } from '@/components/product/image';
import { ProductCategory } from '@/components/product/productCategory';
import { ProductFreight } from '@/components/product/productFreight';
import { ProductInfoContainer } from '@/components/product/productInfoContainer';
import { ProductName } from '@/components/product/productName';
import { ProductPrice } from '@/components/product/productPrice';
import {
  MAX_PRODUCTS_QUANTITY_PER_CART,
  useCartContext,
} from '@/contexts/cartContext/cartContext';
import { useProduct } from '@/hooks/useProduct';

export default function ProductDetailPage() {
  const { id: productId } = useParams();
  const { product } = useProduct(productId as string);
  const { addCartItem } = useCartContext();
  const defaultFreightMessage =
    '*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.';

  function handleAddToCart() {
    const result = addCartItem(product);
    if (result) {
      toast('Produto adicionado ao carrinho', { type: 'success' });
      return;
    }

    toast(
      `Só é permitido ${MAX_PRODUCTS_QUANTITY_PER_CART} quantidades do mesmo produto no carrinho`,
      { type: 'warning' },
    );
  }

  return (
    <PageContentContainer>
      <BackButton route={'/products'} />
      {product.id && (
        <Container>
          <ImageContainer>
            <Image src={product.image_url} alt={product.name} />
          </ImageContainer>
          <ProductInfoContainer>
            <div>
              <ProductCategory>{product.categoryLabel}</ProductCategory>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.priceInBrl}</ProductPrice>
              <ProductFreight>{defaultFreightMessage}</ProductFreight>
              <DescriptionTitle>Descrição</DescriptionTitle>
              <DescriptionContent>{product.description}</DescriptionContent>
            </div>
            <AddProduct onClick={handleAddToCart}>
              <ShoppingBagWhiteIcon />
              Adicionar ao Carrinho
            </AddProduct>
          </ProductInfoContainer>
        </Container>
      )}
    </PageContentContainer>
  );
}
