import darkThemeColors from './darkThemeColors';
import lightThemeColors from './lightThemeColors';

export interface Palette {
  mode: 'light' | 'dark';

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };
  accentText: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };
  textOnAccent: {
    primary: string;
    secondary: string;
    disabled: string;
    selectedText: string;
  };

  controlFill: {
    default: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    transparent: string;
    inputActive: string;
  };
  controlAltFill: {
    transparent: string;
    secondary: string;
    tertiary: string;
    quarternary: string;
    disabled: string;
  };
  controlStrongFill: {
    default: string;
    disabled: string;
  };
  subtleFill: {
    transparent: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };
  controlOnImageFill: {
    default: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };
  accentFill: {
    default: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    selectedTextBackground: string;
  };

  controlElevation: {
    controlBorder: {
      background: string;
    };
    circleBorder: {
      background: string;
    };
    textControlBorder: {
      background: string;
    };
    textControlBorderFocused: {
      background: string;
    };
    accentControlBorder: {
      background: string;
    };
  };

  controlStroke: {
    default: string;
    secondary: string;
    onAccentDefault: string;
    onAccentSecondary: string;
    onAccentTertiary: string;
    onAccentDisabled: string;
    forStrongFillWhenOnImage: string;
  };
  cardStroke: {
    default: string;
    defaultSolid: string;
  };
  controlStrongStroke: {
    default: string;
    disabled: string;
  };
  surfaceStroke: {
    default: string;
    flyout: string;
  };
  dividerStroke: {
    default: string;
  };
  focusStroke: {
    outer: string;
    inner: string;
  };

  cardBackground: {
    default: string;
    secondary: string;
  };
  smokeBackground: {
    default: string;
  };
  layer: {
    default: string;
    alt: string;
  };
  layerOnAcrylic: {
    default: string;
  };
  solidBackground: {
    base: string;
    secondary: string;
    tertiary: string;
    quarternary: string;
  };
  micaBackground: {
    background: string;
    backgroundBlendMode: string;
  };
  acrylicBackground: {
    base: {
      background: string;
      backgroundBlendMode: string;
    };
    default: {
      background: string;
      backgroundBlendMode: string;
    };
  };
  accentAcrylicBackground: {
    base: {
      background: string;
      backgroundBlendMode: string;
    };
    default: {
      background: string;
      backgroundBlendMode: string;
    };
  };
}

export interface PaletteOptions {
  mode?: 'light' | 'dark';
}

export default function createPalette(paletteOptions: PaletteOptions) {
  const { mode = 'light' } = paletteOptions;

  return mode === 'light' ? lightThemeColors : darkThemeColors;
}
