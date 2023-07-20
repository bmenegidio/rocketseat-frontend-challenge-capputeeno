import styled from 'styled-components';

export const CardDescription = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin-top: 0.75rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;
`;
