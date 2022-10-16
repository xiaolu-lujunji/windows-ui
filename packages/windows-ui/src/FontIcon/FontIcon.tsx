import React from 'react';
import styled from '../styles/styled';

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

export interface FontIconProps {
  unicode: string;
  /**
   * The fontSize applied to the icon. Defaults to 16px, but can be configure to inherit font size.
   * @default 'standard'
   */
  fontSize?: 'inherit' | 'standard' | 'small';
}

const FontIcon = React.forwardRef<HTMLSpanElement, FontIconProps>(function FontIcon(props, ref) {
  const { unicode, fontSize = 'standard', ...other } = props;

  const ownerState = { unicode, fontSize };

  return <FontIconRoot ownerState={ownerState} ref={ref} {...other} />;
});

export default FontIcon;
