import type { WinUIPalette } from './createWinUIPalette';
import type { WinUITypography } from './createTypography';

export interface WinUI {
  palette: WinUIPalette;
  typography: WinUITypography;
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    winUI: WinUI;
  }

  interface Theme {
    winUI: WinUI;
  }
}

export { default } from '@mui/material/styles/createTheme';
export * from '@mui/material/styles/createTheme';
