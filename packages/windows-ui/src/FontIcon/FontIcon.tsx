import React from 'react';
import styled from '../styles/styled';

const FontIconRoot = styled('span', {
  name: 'WuiFontIcon',
  slot: 'Root',
})<{ ownerState: { unicode: string } }>(({ ownerState }) => ({
  fontFamily: 'Segoe Fluent Icons',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '16px',
  '&:before': {
    content: `"\\${ownerState.unicode}"`,
  },
}));

export interface FontIconProps {
  unicode: string;
}

const FontIcon = React.forwardRef<HTMLSpanElement, FontIconProps>(function FontIcon(props, ref) {
  const { unicode } = props;

  const ownerState = { unicode };

  return <FontIconRoot ownerState={ownerState} ref={ref} />;
});

export default FontIcon;
