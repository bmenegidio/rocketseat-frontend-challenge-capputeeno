'use client';

import { CartControl } from '@/components/navbar/components/cartControl';
import { Header } from '@/components/navbar/components/header';
import { Logo } from '@/components/navbar/components/logo';

export const Navbar = () => (
  <Header>
    <Logo />
    <CartControl />
  </Header>
);
