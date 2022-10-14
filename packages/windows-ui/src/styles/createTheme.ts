import createPalette from './createPalette';
import createTypography from './createTypography';
import type { Palette, PaletteOptions } from './createPalette';
import type { Typography } from './createTypography';

export interface Theme {
  palette: Palette;
  typography: Typography;
}

export interface ThemeOptions {
  palette?: PaletteOptions;
}

function createTheme(themeOptions: ThemeOptions = {}): Theme {
  const { palette = {} } = themeOptions;

  return {
    palette: createPalette(palette),
    typography: createTypography(),
  };
}

export default createTheme;
