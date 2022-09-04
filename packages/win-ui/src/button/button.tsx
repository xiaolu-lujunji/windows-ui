import React from 'react';
import styled from '../styles/styled';

const ButtonRoot = styled('button', {
  name: 'WinUIButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, styles[ownerState.variant]];
  },
})<{ ownerState: { variant: 'accent' | 'standard' } }>(({ theme, ownerState }) => ({
  minWidth: 120,
  padding: '5px 12px',
  ...theme.typography.body,
  textAlign: 'center',
  // TODO: how to implement gradient rounded corners border?
  border: '1px solid transparent',
  borderRadius: 4,
  '&:focus-visible': {
    // TODO: how to implement inner stroke?
    outline: `2px solid ${theme.palette.focusStroke.outer}`,
    outlineOffset: 1,
  },
  ...(ownerState.variant === 'accent' && {
    color: theme.palette.textOnAccent.primary,
    backgroundColor: theme.palette.accentFill.default,
    '&:hover': {
      backgroundColor: theme.palette.accentFill.secondary,
    },
    '&:active': {
      color: theme.palette.textOnAccent.secondary,
      backgroundColor: theme.palette.accentFill.tertiary,
      borderColor: theme.palette.controlStroke.onAccentDefault,
    },
    '&:disabled': {
      color: theme.palette.textOnAccent.disabled,
      backgroundColor: theme.palette.accentFill.disabled,
      borderColor: 'transparent',
    },
  }),
  ...(ownerState.variant === 'standard' && {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.controlFill.default,
    '&:hover': {
      backgroundColor: theme.palette.controlFill.secondary,
    },
    '&:active': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.controlFill.tertiary,
      borderColor: theme.palette.controlStroke.default,
    },
    '&:disabled': {
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.controlFill.disabled,
      borderColor: theme.palette.controlStroke.default,
    },
  }),
}));

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   * @default 'accent'
   */
  variant?: 'accent' | 'standard';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (props, ref) {
  const { type = 'button', variant = 'accent', children, ...other } = props;

  const ownerState = {
    variant,
  };

  return (
    <ButtonRoot ownerState={ownerState} type={type} ref={ref} {...other}>
      {children}
    </ButtonRoot>
  );
});

export default Button;
