import React from 'react';
import styled from '../styles/styled';
import NoiseAsset_256 from './NoiseAsset_256.png';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/create-theme';

const FlyoutRoot = styled('div', {
  name: 'WinUIFlyout',
  slot: 'Root',
})(({ theme }) => ({
  padding: 16,
  borderWidth: 1,
  borderStyle: 'solid',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.14)',
  backdropFilter: 'blur(60px)',
  borderRadius: 7,
  ...(theme.palette.mode === 'light' && {
    background: `url(${NoiseAsset_256}), rgba(252, 252, 252, 0.85)`,
    backgroundBlendMode: 'normal, luminosity',
    borderColor: 'rgba(0, 0, 0, 0.0578)',
  }),
}));

export interface FlyoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

const Flyout = React.forwardRef<HTMLDivElement, FlyoutProps>(function (props, ref) {
  const { children, ...other } = props;

  return (
    <FlyoutRoot ref={ref} {...other}>
      {children}
    </FlyoutRoot>
  );
});

export default Flyout;
