import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 22rem;
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
