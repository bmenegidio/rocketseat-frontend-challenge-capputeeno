import { useState } from 'react';

import { ButtonStyled } from '@/components/filterBar/sortBy/buttonStyled';
import { ContainerStyled } from '@/components/filterBar/sortBy/containerStyled';
import { Menu } from '@/components/filterBar/sortBy/menu';
import { TextStyled } from '@/components/filterBar/sortBy/textStyled';
import { ArrowDownIcon } from '@/components/icons/arrowDown';
import { useFilter } from '@/contexts/filterContext/filterContext';
import { SortByOptions } from '@/contexts/filterContext/models/sortByOptions';

export const SortBy = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { setSortBy } = useFilter();

  function handleItemSelected(sort: SortByOptions) {
    setIsMenuVisible(!isMenuVisible);
    setSortBy(sort);
  }

  return (
    <ContainerStyled>
      <ButtonStyled onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <TextStyled>Organizar por</TextStyled>
        <ArrowDownIcon />
      </ButtonStyled>
      {isMenuVisible && <Menu onItemClick={handleItemSelected} />}
    </ContainerStyled>
  );
};
