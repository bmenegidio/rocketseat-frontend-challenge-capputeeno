import styled from 'styled-components';

export const AddProduct = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: none;
  background: ${(props) => props.theme.colors.brandBlue};
  color: ${(props) => props.theme.colors.lightBackground};
  font-size: inherit;
  font-weight: 500;
  line-height: 1.5rem;
  text-transform: uppercase;
  border-radius: 0.25rem;
  padding: 0.6rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;
