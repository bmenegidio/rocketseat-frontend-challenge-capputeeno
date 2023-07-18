import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 2.5rem;
  }
`;
