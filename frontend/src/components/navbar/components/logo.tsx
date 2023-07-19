import { Saira_Stencil_One } from 'next/font/google';
import styled from 'styled-components';

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
});

const LogoStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.theme.colors.logo};
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

export const Logo = () => (
  <LogoStyled className={sairaStencilOne.className} href={'/'}>
    capputeeno
  </LogoStyled>
);
