import React from 'react';
import styled from '../styles/styled';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

const FontIconRoot = styled('span', {
  name: 'WuiFontIcon',
  slot: 'Root',
})<{ ownerState: { unicode: string; fontSize: 'inherit' | 'standard' | 'small' } }>(
  ({ ownerState }) => ({
    fontFamily: 'Segoe Fluent Icons',
    fontStyle: 'normal',
    fontWeight: 400,
    ...(ownerState.fontSize === 'inherit' && {
      fontSize: 'inherit',
      lineHeight: 'inherit',
    }),
    ...(ownerState.fontSize === 'standard' && {
      fontSize: 16,
      lineHeight: '16px',
    }),
    ...(ownerState.fontSize === 'small' && {
      fontSize: 12,
      lineHeight: '12px',
    }),
    '&:before': {
      content: `"\\${ownerState.unicode}"`,
    },
  }),
);

export interface FontIconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  unicode: string;
  /**
   * The fontSize applied to the icon. Defaults to 16px, but can be configure to inherit font size.
   * @default 'standard'
   */
  fontSize?: 'inherit' | 'standard' | 'small';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

const FontIcon = React.forwardRef<HTMLSpanElement, FontIconProps>(function FontIcon(props, ref) {
  const { unicode, fontSize = 'standard', ...other } = props;

  const ownerState = { unicode, fontSize };

  return <FontIconRoot ownerState={ownerState} ref={ref} {...other} />;
});

export default FontIcon;
