import styled, { css } from 'styled-components';

import { PageButtonProps } from '@/components/pagination/models/buttonProps';

export const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.textDark2};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: inherit;
  line-height: 1.5rem;
  cursor: pointer;

  ${(props) =>
    props.$isCurrentPage &&
    css`
      background: ${props.theme.colors.lightBackground};
      color: ${props.theme.colors.orangeLow};
      border: 1px solid ${props.theme.colors.orangeLow};
    `}
`;
