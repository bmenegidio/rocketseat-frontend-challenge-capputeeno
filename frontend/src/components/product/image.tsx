import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 50%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 40rem;
  height: auto;
`;
