import styled from 'styled-components';

export const ContentFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;
