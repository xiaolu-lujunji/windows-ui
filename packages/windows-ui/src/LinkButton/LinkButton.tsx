import React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import styled from '../styles/styled';
import type { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

const LinkButtonRoot = styled(ButtonUnstyled<'a'>, {
  name: 'WuiLinkButton',
  slot: 'Root',
})<{ ownerState: { variant: 'standard' | 'neutral' | 'alt' | 'altNeutral' } }>(
  ({ ownerState, theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 12px',
    ...theme.typography.body,
    ...((ownerState.variant === 'standard' || ownerState.variant === 'alt') && {
      color: theme.palette.accentText.primary,
    }),
    ...((ownerState.variant === 'neutral' || ownerState.variant === 'altNeutral') && {
      color: theme.palette.text.primary,
    }),
    borderRadius: 4,
    textDecoration: 'none',
    '&:hover': {
      ...((ownerState.variant === 'standard' || ownerState.variant === 'alt') && {
        color: theme.palette.accentText.secondary,
      }),
      ...(ownerState.variant === 'neutral' && {
        color: theme.palette.text.primary,
      }),
      ...(ownerState.variant === 'altNeutral' && {
        color: theme.palette.text.secondary,
      }),
      ...((ownerState.variant === 'standard' || ownerState.variant === 'neutral') && {
        backgroundColor: theme.palette.subtleFill.secondary,
      }),
    },
    '&:active': {
      ...((ownerState.variant === 'standard' || ownerState.variant === 'alt') && {
        color: theme.palette.accentText.tertiary,
      }),
      ...(ownerState.variant === 'neutral' && {
        color: theme.palette.text.secondary,
      }),
      ...(ownerState.variant === 'altNeutral' && {
        color: theme.palette.text.tertiary,
      }),
      ...((ownerState.variant === 'standard' || ownerState.variant === 'neutral') && {
        backgroundColor: theme.palette.subtleFill.tertiary,
      }),
    },
    [`&.${buttonUnstyledClasses.disabled}`]: {
      ...(ownerState.variant === 'altNeutral' && {
        color: theme.palette.text.disabled,
      }),
      ...(ownerState.variant !== 'altNeutral' && {
        color: theme.palette.accentText.disabled,
      }),
      backgroundColor: 'transparent',
    },
  }),
);

const ButtonStartIcon = styled('span', {
  name: 'WuiLinkButton',
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

export interface LinkButtonProps extends ButtonUnstyledProps<'a'> {
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: 'standard' | 'neutral' | 'alt' | 'altNeutral';
  /**
   * The URL to link to when the button is clicked.
   */
  href?: string;
  /**
   * Where to display the linked URL.
   */
  target?: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(function LinkButton(
  props,
  ref,
) {
  const {
    variant = 'standard',
    href: hrefProp,
    disabled = false,
    startIcon: startIconProp,
    endIcon: endIconProp,
    children,
    ...other
  } = props;

  const href = disabled ? undefined : hrefProp;

  const startIcon = startIconProp && <ButtonStartIcon>{startIconProp}</ButtonStartIcon>;

  const endIcon = endIconProp && <ButtonEndIcon>{endIconProp}</ButtonEndIcon>;

  const ownerState = { variant };

  return (
    <LinkButtonRoot
      component="a"
      href={href}
      disabled={disabled}
      ownerState={ownerState}
      ref={ref}
      {...other}
    >
      {startIcon}
      {children}
      {endIcon}
    </LinkButtonRoot>
  );
});

export default LinkButton;
