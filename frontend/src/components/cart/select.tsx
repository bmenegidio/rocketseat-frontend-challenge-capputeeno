import styled from 'styled-components';

export const Select = styled.select`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.textDark};
  background: ${(props) => props.theme.colors.bgInput};
  padding: 0.5rem 1rem;
`;
