import { forwardRef } from 'react';
import styled from '../styles/styled';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

const FlyoutRoot = styled('div', {
  name: 'WuiFlyout',
  slot: 'Root',
})(({ theme }) => ({
  border: `1px solid ${theme.palette.surfaceStroke.flyout}`,
  borderRadius: 8,
  boxShadow: theme.shadows.flyout,
  ...theme.palette.acrylicBackground.default,
  backdropFilter: 'blur(30px)',
}));

export interface FlyoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const Flyout = forwardRef<HTMLDivElement, FlyoutProps>(function Flyout(props, ref) {
  const { children, ...other } = props;

  return (
    <FlyoutRoot {...other} ref={ref}>
      {children}
    </FlyoutRoot>
  );
});

export default Flyout;
