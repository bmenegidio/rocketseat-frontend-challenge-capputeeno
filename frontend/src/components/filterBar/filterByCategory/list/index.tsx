import { ListItemStyled } from '@/components/filterBar/filterByCategory/list/listItemStyled';
import { ListStyled } from '@/components/filterBar/filterByCategory/list/listStyled';

export const List = () => (
  <ListStyled>
    <ListItemStyled isSelected>Todos os Produtos</ListItemStyled>
    <ListItemStyled isSelected={false}>Camisetas</ListItemStyled>
    <ListItemStyled isSelected={false}>Canecas</ListItemStyled>
  </ListStyled>
);
