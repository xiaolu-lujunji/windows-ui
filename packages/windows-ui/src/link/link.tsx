import React from 'react';
import clsx from 'clsx';
import styled from '../styles/styled';

const LinkRoot = styled('a', {
  name: 'WinUILink',
  slot: 'Root',
})(({ theme }) => ({
  fontFamily: 'Segoe UI Variable Static Text',
  fontSize: 14,
  lineHeight: '20px',
  color: theme.palette.accentText.primary,
  '&:hover': {
    textDecorationLine: 'none',
    color: theme.palette.accentText.tertiary,
  },
  '&:active': {
    textDecorationLine: 'none',
    color: theme.palette.accentText.secondary,
  },
  '&.WinUI-disabled': {
    textDecorationLine: 'underline',
    color: theme.palette.accentText.disabled,
  },
  '&:focus-visible': {
    // TODO: how to implement inner stroke?
    outline: `2px solid ${theme.palette.focusStroke.outer}`,
    outlineOffset: 1,
    borderRadius: 4,
  },
}));

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function (props, ref) {
  const { href, disabled = false, className, children, ...other } = props;

  return (
    <LinkRoot
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={clsx(className, { 'WinUI-disabled': disabled })}
      ref={ref}
      {...other}
    >
      {children}
    </LinkRoot>
  );
});

export default Link;
