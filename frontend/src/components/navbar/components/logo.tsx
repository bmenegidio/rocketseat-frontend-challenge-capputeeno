import { Saira_Stencil_One } from 'next/font/google';
import styled from 'styled-components';

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
});

const LogoStyled = styled.a`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.theme.colors.logo};
`;

export const Logo = () => (
  <LogoStyled className={sairaStencilOne.className}>capputeeno</LogoStyled>
);
