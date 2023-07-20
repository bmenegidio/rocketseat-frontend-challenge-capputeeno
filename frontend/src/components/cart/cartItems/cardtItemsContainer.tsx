import styled from 'styled-components';

export const CardtItemsContainer = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 65%;
  }
`;
