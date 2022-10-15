import React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import styled from '../styles/styled';
import type { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';

const ButtonRoot = styled(ButtonUnstyled, {
  name: 'WuiButton',
  slot: 'Root',
})<{
  ownerState: {
    variant: 'standard' | 'accent' | 'subtle';
  };
}>(({ theme, ownerState }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 4,
  ...(ownerState.variant === 'standard' && {
    minWidth: 118,
    padding: '5px 10px',
    margin: 1,
    backgroundColor: theme.palette.controlFill.default,
    ...theme.typography.body,
    color: theme.palette.text.primary,
    textTransform: 'none',
    '&:before': {
      content: '""',
      position: 'absolute',
      inset: -1,
      padding: 1,
      borderRadius: 4,
      ...theme.palette.controlElevation.controlBorder,
      mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
      maskComposite: 'xor',
    },
    '&:hover': {
      backgroundColor: theme.palette.controlFill.secondary,
    },
    '&:active': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.controlFill.tertiary,
      '&:before': {
        background: theme.palette.controlStroke.default,
      },
    },
    [`&.${buttonUnstyledClasses.disabled}`]: {
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.controlFill.disabled,
      '&:before': {
        background: theme.palette.controlStroke.default,
      },
    },
  }),
  ...(ownerState.variant === 'accent' && {
    minWidth: 120,
    padding: '6px 10px',
    backgroundColor: theme.palette.accentFill.default,
    ...theme.typography.body,
    color: theme.palette.textOnAccent.primary,
    textTransform: 'none',
    '&:before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      padding: 1,
      borderRadius: 4,
      ...theme.palette.controlElevation.accentControlBorder,
      mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
      maskComposite: 'xor',
    },
    '&:hover': {
      backgroundColor: theme.palette.accentFill.secondary,
    },
    '&:active': {
      color: theme.palette.textOnAccent.secondary,
      backgroundColor: theme.palette.accentFill.tertiary,
      '&:before': {
        background: theme.palette.controlStroke.onAccentDefault,
      },
    },
    [`&.${buttonUnstyledClasses.disabled}`]: {
      color: theme.palette.textOnAccent.disabled,
      backgroundColor: theme.palette.accentFill.disabled,
      '&:before': {
        background: 'transparent',
      },
    },
  }),
  ...(ownerState.variant === 'subtle' && {
    minWidth: 120,
    padding: '6px 10px',
    backgroundColor: theme.palette.subtleFill.transparent,
    ...theme.typography.body,
    color: theme.palette.text.primary,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.subtleFill.secondary,
    },
    '&:active': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.subtleFill.tertiary,
    },
    [`&.${buttonUnstyledClasses.disabled}`]: {
      color: theme.palette.text.disabled,
      backgroundColor: 'transparent',
    },
  }),
}));

const ButtonStartIcon = styled('span', {
  name: 'WuiButton',
  slot: 'StartIcon',
})({
  display: 'inherit',
  marginRight: 8,
});

const ButtonEndIcon = styled('span', {
  name: 'WuiButton',
  slot: 'EndIcon',
})({
  display: 'inherit',
  marginLeft: 8,
});

export interface ButtonProps extends ButtonUnstyledProps {
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: 'standard' | 'accent' | 'subtle';
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    variant = 'standard',
    startIcon: startIconProp,
    endIcon: endIconProp,
    children,
    ...other
  } = props;

  const ownerState = { variant };

  const startIcon = startIconProp && <ButtonStartIcon>{startIconProp}</ButtonStartIcon>;

  const endIcon = endIconProp && <ButtonEndIcon>{endIconProp}</ButtonEndIcon>;

  return (
    <ButtonRoot ownerState={ownerState} ref={ref} {...other}>
      {startIcon}
      {children}
      {endIcon}
    </ButtonRoot>
  );
});

export default Button;
