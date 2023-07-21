import styled from 'styled-components';

export const OrderSummaryContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    margin-top: 10rem;

    li {
      color: ${(props) => props.theme.colors.textDark2};
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.3125rem;
      text-decoration-line: underline;
      text-transform: uppercase;
      margin-top: 0.75rem;

      a {
        color: ${(props) => props.theme.colors.textDark2};
      }
    }
  }
`;
