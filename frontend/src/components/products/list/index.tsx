import { Divider } from '@/components/divider';
import { Pagination } from '@/components/pagination';
import { FooterContainerStyled } from '@/components/products/list/components/footerContainerStyled';
import { ImageStyled } from '@/components/products/list/components/imageStyled';
import { ListItemStyled } from '@/components/products/list/components/listItemStyled';
import { ProductsListStyled } from '@/components/products/list/components/listStyled';
import { ProductNameStyled } from '@/components/products/list/components/productNameStyled';
import { ProductPriceStyled } from '@/components/products/list/components/productPriceStyled';
import { useFilter } from '@/contexts/filterContext/filterContext';
import { useProducts } from '@/hooks/useProducts';
import { convertPriceInCentsToBrl } from '@/utils/converters';

export const ProductsList = () => {
  const { products, totalProducts, loading } = useProducts();
  const { currentPage, setPage, perPage } = useFilter();

  const renderItem = (product: any) => (
    <ListItemStyled key={product.id}>
      <ImageStyled src={product.image_url} alt={product.name} />
      <FooterContainerStyled>
        <ProductNameStyled>{product.name}</ProductNameStyled>
        <Divider />
        <ProductPriceStyled>
          {convertPriceInCentsToBrl(product.price_in_cents)}
        </ProductPriceStyled>
      </FooterContainerStyled>
    </ListItemStyled>
  );

  return (
    <>
      {!loading && (
        <>
          <Pagination
            totalItems={totalProducts}
            currentPage={currentPage}
            onPageChange={setPage}
            perPage={perPage}
          />
          <ProductsListStyled>{products.map(renderItem)}</ProductsListStyled>
        </>
      )}
    </>
  );
};
