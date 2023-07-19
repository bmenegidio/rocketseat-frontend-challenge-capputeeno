import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  margin: 1.5rem 0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.textGray};
  cursor: pointer;
`;
