import styled from 'styled-components';

export const ProductsListStyled = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  grid-gap: 2.25rem;
  justify-content: center;
  max-width: 100%;
  margin-top: 2.25rem;
`;
