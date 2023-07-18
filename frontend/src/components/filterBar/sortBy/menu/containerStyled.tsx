import styled from 'styled-components';

export const ContainerStyled = styled.ul`
  position: absolute;
  top: 120%;
  right: 8px;
  min-width: 11rem;

  list-style: none;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1rem;

  li + li {
    margin-top: 0.25rem;
  }

  animation: fadeInAnimation 1s ease;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
