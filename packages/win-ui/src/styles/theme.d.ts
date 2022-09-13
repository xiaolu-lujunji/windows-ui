import type { Colors } from './colors';
import type { Typography } from './typography';

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    winUI: {
      colors: Colors;
      typography: Typography;
    };
  }

  interface Theme {
    winUI: {
      colors: Colors;
      typography: Typography;
    };
  }
}
