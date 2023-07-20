import styled from 'styled-components';

export const ButtonFinish = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 2.5rem;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.5rem;
  cursor: pointer;
`;
