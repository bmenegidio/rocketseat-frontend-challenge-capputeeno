import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 12rem;
  height: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 16rem;
  }
`;
