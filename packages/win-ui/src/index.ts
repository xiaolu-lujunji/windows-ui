import createTheme from '@mui/material/styles/createTheme';
import noiseAsset256 from './NoiseAsset_256.png';

const theme = createTheme({
  winUI: {},
});

export interface WinUI {}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    winUI: WinUI;
  }
}
