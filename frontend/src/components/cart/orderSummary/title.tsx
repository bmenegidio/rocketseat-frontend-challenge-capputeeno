import styled from 'styled-components';

export const Title = styled.p`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textDark};
`;
