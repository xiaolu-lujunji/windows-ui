import React from 'react';
import styled from '../styles/styled';
import { linkClasses } from './linkClasses';
import useUtilityClasses from './useUtilityClasses';
import clsx from 'clsx';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

const LinkRoot = styled('a', {
  name: 'WuiLink',
  slot: 'Root',
})(({ theme }) => ({
  fontFamily: 'Segoe UI Variable Static Text',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '20px',
  color: theme.palette.accentText.primary,
  '&:hover': {
    color: theme.palette.accentText.tertiary,
    textDecoration: 'none',
  },
  '&:active': {
    color: theme.palette.accentText.secondary,
    textDecoration: 'none',
  },
  [`&.${linkClasses.disabled}`]: {
    color: theme.palette.accentText.disabled,
    textDecoration: 'underline',
  },
}));

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const { className, disabled = false, href: hrefProp, children, ...other } = props;

  const href = disabled ? undefined : hrefProp;

  const ownerState = { disabled };

  const classes = useUtilityClasses(ownerState);

  return (
    <LinkRoot className={clsx(classes.root, className)} href={href} ref={ref} {...other}>
      {children}
    </LinkRoot>
  );
});

export default Link;
