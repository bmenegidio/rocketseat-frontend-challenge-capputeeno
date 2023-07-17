import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme.colors.bgInput};
  padding: 0.6rem 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.375rem;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.875rem;
  }
`;
