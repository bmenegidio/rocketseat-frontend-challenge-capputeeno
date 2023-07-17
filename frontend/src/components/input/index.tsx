import { forwardRef, InputHTMLAttributes } from 'react';

import { InputStyled } from '@/components/input/components/inputStyled';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props: InputHTMLAttributes<HTMLInputElement>, ref) => (
  <InputStyled ref={ref} {...props} />
));

Input.displayName = 'Input';
