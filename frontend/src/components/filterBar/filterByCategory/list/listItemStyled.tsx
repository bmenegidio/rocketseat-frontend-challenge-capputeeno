import styled, { css } from 'styled-components';

import { ListItemProps } from '@/components/filterBar/filterByCategory/list/models/listItemProps';

export const ListItemStyled = styled.li<ListItemProps>`
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textDark2};
  line-height: 2rem;

  ${(props) =>
    props.isSelected &&
    css`
      font-weight: 600;
      color: ${props.theme.colors.textDark};
      border-bottom: 0.25rem solid ${props.theme.colors.orangeLow};
    `}
`;
