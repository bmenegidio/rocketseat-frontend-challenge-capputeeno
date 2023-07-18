import { ListItemStyled } from '@/components/filterBar/filterByCategory/list/listItemStyled';
import { ListStyled } from '@/components/filterBar/filterByCategory/list/listStyled';
import { useFilter } from '@/contexts/filterContext/filterContext';
import { FilterByCategoryOptions } from '@/contexts/filterContext/models/filterByCategoryOptions';

export const List = () => {
  const { filterByCategory, setFilterByCategory } = useFilter();

  function isSelected(category: FilterByCategoryOptions) {
    return category === filterByCategory;
  }

  function handleSelectCategory(selectedCategory: FilterByCategoryOptions) {
    setFilterByCategory(selectedCategory);
  }

  return (
    <ListStyled>
      <ListItemStyled
        $isSelected={isSelected(FilterByCategoryOptions.ALL)}
        onClick={() => handleSelectCategory(FilterByCategoryOptions.ALL)}
      >
        Todos os Produtos
      </ListItemStyled>
      <ListItemStyled
        $isSelected={isSelected(FilterByCategoryOptions.T_SHIRTS)}
        onClick={() => handleSelectCategory(FilterByCategoryOptions.T_SHIRTS)}
      >
        Camisetas
      </ListItemStyled>
      <ListItemStyled
        $isSelected={isSelected(FilterByCategoryOptions.MUGS)}
        onClick={() => handleSelectCategory(FilterByCategoryOptions.MUGS)}
      >
        Canecas
      </ListItemStyled>
    </ListStyled>
  );
};
