import React from 'react';
import clsx from 'clsx';
import styled from '../styles/styled';

const LinkButtonRoot = styled('a', {
  name: 'LinkButton',
  slot: 'Root',
})(({ theme }) => ({
  padding: '4px 11px 6px',
  ...theme.typography.body,
  textAlign: 'center',
  textDecorationLine: 'none',
  color: theme.palette.accentText.primary,
  borderRadius: 3,
  '&:hover': {
    color: theme.palette.accentText.secondary,
    backgroundColor: theme.palette.subtleFill.secondary,
  },
  '&:active': {
    color: theme.palette.accentText.tertiary,
    backgroundColor: theme.palette.subtleFill.tertiary,
  },
  '&.WinUI-disabled': {
    color: theme.palette.accentText.disabled,
    backgroundColor: 'transparent',
  },
  '&:focus-visible': {
    // TODO: how to implement inner stroke?
    outline: `2px solid ${theme.palette.focusStroke.outer}`,
    outlineOffset: 1,
  },
}));

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(function (props, ref) {
  const { href, disabled = false, className, children, ...other } = props;

  return (
    <LinkButtonRoot
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={clsx(className, {
        'WinUI-disabled': disabled,
      })}
      ref={ref}
      {...other}
    >
      {children}
    </LinkButtonRoot>
  );
});

export default LinkButton;
