import React from 'react';
import styled from '../styles/styled';

const IconBaseRoot = styled('span', {
  name: 'WinUIFluentIcon',
  slot: 'Root',
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  lineHeight: '12px',
  '&::before': {
    fontFamily: 'Segoe Fluent Icons',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
  },
});

export interface FluentIconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {}

const IconBase = React.forwardRef<HTMLSpanElement, FluentIconProps>(function (props, ref) {
  return <IconBaseRoot ref={ref} {...props} />;
});

export default IconBase;
