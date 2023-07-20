import { UpdateProductQuantityProps } from '@/contexts/cartContext/models/updateProductQuantityProps';
import { ProductParsed } from '@/hooks/useProduct/models/productParsed';

export type CartContextProps = {
  cartItems: ProductParsed[];
  addCartItem: (item: ProductParsed) => boolean;
  updateProductQuantity: (params: UpdateProductQuantityProps) => void;
  deleteProduct: (productId: string) => void;
  emptyTheCart: () => void;
  subTotalProductsInCents: number;
  subTotalProductsInBrl: string;
};
