import styled from 'styled-components';

export const CartBadge = styled.div`
  position: absolute;
  bottom: -7px;
  right: -7px;
  min-width: 1.065rem;
  min-height: 1.065rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  background: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.white};
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 100%;
`;
