export interface PaletteColor {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
}

export type PaletteColorPartial = Partial<PaletteColor>;

export interface Elevation {
  control: string;
  circle: string;
  textControl: string;
  textControlFocused: string;
  accentControl: string;
}

export interface Palette {
  mode?: 'light' | 'dark';

  text: PaletteColor;
  accentText: PaletteColor;
  textOnAccent: Omit<PaletteColor, 'tertiary'> & { selectedText?: string };

  controlFill: Omit<PaletteColor, 'primary'> & { default: string; inputActive?: string };
  controlAltFill?: Omit<PaletteColorPartial, 'primary'> & { quarternary?: string };
  controlStrongFill?: { default?: string; disabled?: string };
  subtleFill: Omit<PaletteColor, 'primary'>;
  controlOnImageFill?: Omit<PaletteColorPartial, 'primary'> & {
    default?: string;
  };
  accentFill: Omit<PaletteColor, 'primary'> & {
    default: string;
    selectedTextBackground?: string;
  };

  elevation?: Partial<Elevation>;

  controlStroke: {
    default: string;
    secondary?: string;
    onAccentDefault: string;
    onAccentSecondary?: string;
    onAccentTertiary?: string;
    onAccentDisabled?: string;
    forStrongFillWhenOnImage?: string;
  };
  cardStroke?: { default?: string; defaultSolid?: string };
  controlStrongStroke?: {
    default?: string;
    disabled?: string;
  };
  surfaceStroke?: {
    default?: string;
    flyout?: string;
  };
  dividerStroke?: { default?: string };
  focusStroke: {
    outer: string;
    // inner?: string;
  };

  cardBackground?: {
    default?: string;
    secondary?: string;
  };
  smokeBackground?: { default?: string };
  layer?: {
    default?: string;
    alt?: string;
  };
  layerOnAcrylic?: { default?: string };
  solidBackground?: {
    base?: string;
    secondary?: string;
    tertiary?: string;
    quarternary?: string;
  };
  micaBackground?: { base: string };
  acrylicBackground?: Partial<{
    base: string;
    default: string;
  }>;
  accentAcrylicBackground?: Partial<{
    base: string;
    default: string;
  }>;
}

export default function createPalette(): Palette {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.8956)',
      secondary: 'rgba(0, 0, 0, 0.6063)',

      disabled: 'rgba(0, 0, 0, 0.3614)',
    },
    accentText: {
      primary: '#003e92',
      secondary: '#001a68',
      tertiary: '#005fb8',
      disabled: 'rgba(0, 0, 0, 0.3614)',
    },
    textOnAccent: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',

      disabled: '#ffffff',
    },
    controlFill: {
      default: 'rgba(255, 255, 255, 0.7)',
      secondary: 'rgba(249, 249, 249, 0.5)',
      tertiary: 'rgba(249, 249, 249, 0.3)',
      disabled: 'rgba(249, 249, 249, 0.3)',
    },
    subtleFill: {
      secondary: 'rgba(0, 0, 0, 0.0373)',
      tertiary: 'rgba(0, 0, 0, 0.0241)',
    },
    accentFill: {
      default: '#005fb8',
      secondary: 'rgba(0, 95, 184, 0.9)',
      tertiary: 'rgba(0, 95, 184, 0.8)',
      disabled: 'rgba(0, 0, 0, 0.2169)',
    },
    controlStroke: {
      default: 'rgba(0, 0, 0, 0.0578)',
      onAccentDefault: 'rgba(255, 255, 255, 0.08)',
    },
    focusStroke: {
      outer: 'rgba(0, 0, 0, 0.8956)',
    },
  };
}
