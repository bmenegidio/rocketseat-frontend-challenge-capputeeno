import { ContainerStyled } from '@/components/filterBar/sortBy/menu/containerStyled';
import { ItemStyled } from '@/components/filterBar/sortBy/menu/itemStyled';
import { MenuProps } from '@/components/filterBar/sortBy/menu/models/menuProps';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

export const Menu = ({ onItemClick }: MenuProps) => (
  <ContainerStyled>
    <ItemStyled onClick={() => onItemClick(SortByOptions.NEWS)}>
      Novidades
    </ItemStyled>
    <ItemStyled onClick={() => onItemClick(SortByOptions.BIGGEST_PRICE)}>
      Preço: Maior - menor
    </ItemStyled>
    <ItemStyled onClick={() => onItemClick(SortByOptions.MINOR_PRICE)}>
      Preço: Menor - maior
    </ItemStyled>
    <ItemStyled onClick={() => onItemClick(SortByOptions.POPULARITY)}>
      Mais vendidos
    </ItemStyled>
  </ContainerStyled>
);
