import styled from 'styled-components';

export const ContentContainerStyled = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.padding.content.mobile};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.padding.content.desktop};
  }
`;
