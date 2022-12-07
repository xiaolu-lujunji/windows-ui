import createPalette from './createPalette';
import createTypography from './createTypography';
import createShadows from './createShadows';
import type { Palette, PaletteOptions } from './createPalette';
import type { Typography } from './createTypography';
import type { Shadows } from './createShadows';

export interface Theme {
  palette: Palette;
  typography: Typography;
  shadows: Shadows;
}

export interface ThemeOptions {
  palette?: PaletteOptions;
}

function createTheme(themeOptions: ThemeOptions = {}): Theme {
  const { palette = {} } = themeOptions;

  return {
    palette: createPalette(palette),
    typography: createTypography(),
    shadows: createShadows(palette.mode),
  };
}

export default createTheme;
