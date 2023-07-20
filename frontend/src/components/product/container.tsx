import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: normal;
  }
`;
