import createPalette from './create-palette';
import type { Palette } from './create-palette';

export interface FontStyle {
  fontFamily: React.CSSProperties['fontFamily'];
  fontSize: number;
  lineHeight: React.CSSProperties['lineHeight'];
}

export interface Typography {
  body: FontStyle;
}

export interface Theme {
  palette: Palette;
  typography: Typography;
}

export default function createTheme(): Theme {
  return {
    palette: createPalette(),
    typography: {
      body: {
        fontFamily: 'Segoe UI Variable',
        fontSize: 14,
        lineHeight: '20px',
      },
    },
  };
}
