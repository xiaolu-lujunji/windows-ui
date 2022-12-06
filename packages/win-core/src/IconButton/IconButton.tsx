import React from 'react';
import Button from '../Button';
import styled from '../styles/styled';
import type { ButtonProps } from '../Button';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

const IconButtonRoot = styled(Button, {
  name: 'WuiIconButton',
  slot: 'Root',
})<{
  ownerState: { variant: 'standard' | 'accent' | 'subtle'; size: 'standard' | 'compactTouch' };
}>(({ ownerState }) => ({
  minWidth: 0,
  fontSize: 12,
  ...(ownerState.size === 'standard' && {
    padding: 7,
    ...(ownerState.variant === 'subtle' && {
      padding: 8,
    }),
  }),
  ...(ownerState.size === 'compactTouch' && {
    padding: 5,
    ...(ownerState.variant === 'subtle' && {
      padding: 6,
    }),
  }),
}));

export interface IconButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon'> {
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: 'standard' | 'accent' | 'subtle';
  /**
   * The size of the component.
   * @default 'standard'
   */
  size?: 'standard' | 'compactTouch';
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  props,
  ref,
) {
  const { variant = 'standard', size = 'standard', children, ...other } = props;

  const ownerState = { variant, size };

  return (
    <IconButtonRoot variant={variant} size={size} ownerState={ownerState} ref={ref} {...other}>
      {children}
    </IconButtonRoot>
  );
});

export default IconButton;
