import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: ${(props) => props.theme.padding.content.mobile};
  background: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
    padding: ${(props) => props.theme.padding.content.desktop};
  }
`;
