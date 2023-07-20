import styled from 'styled-components';

export const SubTitle = styled.span`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;
  margin-top: 0.3rem;
`;

export const SubTitleStrong = styled(SubTitle)`
  font-weight: 600;
`;
