import styled from 'styled-components';

export const CardTitle = styled.p`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.8rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
