import React from 'react';
import Button from '../Button';
import IconButton from '../IconButton';
import type { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';

export interface ToggleButtonProps extends ButtonUnstyledProps {
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: 'standard' | 'subtle';
  /**
   * The button component to use.
   * @default 'Button''
   */
  buttonComponent?: 'Button' | 'IconButton';
  /**
   * If `true`, the button is rendered in an active state.
   * @default false
   */
  selected?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The size of the component.
   * @default 'standard'
   */
  size?: 'standard' | 'compactTouch';
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(function ToggleButton(
  props,
  ref,
) {
  const {
    variant: variantProp = 'standard',
    buttonComponent = 'Button',
    selected,
    children,
    ...other
  } = props;

  const ButtonComponent = buttonComponent === 'Button' ? Button : IconButton;

  const variant = selected ? 'accent' : variantProp;

  return (
    <ButtonComponent variant={variant} ref={ref} {...other}>
      {children}
    </ButtonComponent>
  );
});

export default ToggleButton;
