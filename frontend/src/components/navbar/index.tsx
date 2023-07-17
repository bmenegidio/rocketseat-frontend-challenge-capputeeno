'use client';

import { SearchIcon } from '@/components/icons/search';
import { Input } from '@/components/input';
import { CartControl } from '@/components/navbar/components/cartControl';
import { Header } from '@/components/navbar/components/header';
import { InputContainer } from '@/components/navbar/components/inputContainer';
import { Logo } from '@/components/navbar/components/logo';
import { NavRightContainer } from '@/components/navbar/components/navRightContainer';

export const Navbar = () => (
  <Header>
    <Logo />
    <NavRightContainer>
      <InputContainer>
        <Input placeholder='Procurando por algo específico?' />
        <SearchIcon />
      </InputContainer>
      <CartControl />
    </NavRightContainer>
  </Header>
);
