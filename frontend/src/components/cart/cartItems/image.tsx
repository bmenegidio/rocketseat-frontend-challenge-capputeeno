import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius} 0 0
    ${(props) => props.theme.borderRadius};
`;
