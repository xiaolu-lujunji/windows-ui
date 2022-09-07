import React from 'react';
import styled from '../styles/styled';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/create-theme';

const TypographyRoot = styled('span', {
  name: 'WinUITypography',
  slot: 'Root',
})<{ ownerState: { variant: 'body' } }>(({ theme, ownerState }) => ({
  ...theme.typography[ownerState.variant],
}));

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Applies the theme typography styles.
   * @default 'body'
   */
  variant?: 'body';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(function (props, ref) {
  const { variant = 'body', children, ...other } = props;

  const ownerState = { variant };

  return (
    <TypographyRoot ownerState={ownerState} ref={ref} {...other}>
      {children}
    </TypographyRoot>
  );
});

export default Typography;
