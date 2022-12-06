import { forwardRef, useRef } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { children } = props;

  return <button ref={ref}></button>;
});

export default Button;
