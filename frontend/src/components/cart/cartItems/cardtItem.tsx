import styled from 'styled-components';

export const CardtItem = styled.div`
  display: flex;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 13rem;
  background: ${(props) => props.theme.colors.white};
`;
