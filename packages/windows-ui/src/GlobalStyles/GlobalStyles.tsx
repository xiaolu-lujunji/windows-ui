import { GlobalStyles as SystemGlobalStyles } from '@mui/system';
import defaultTheme from '../styles/defaultTheme';
import type { GlobalStylesProps as StyledGlobalStylesProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

export interface GlobalStylesProps {
  /**
   * The styles you want to apply globally.
   */
  styles: StyledGlobalStylesProps<Theme>['styles'];
}

function GlobalStyles(props: GlobalStylesProps) {
  return <SystemGlobalStyles {...props} defaultTheme={defaultTheme} />;
}

export default GlobalStyles;
