import noiseAsset256 from './NoiseAsset_256.png';
import type { WinUIPalette } from './createWinUIPalette';

const darkThemeColors: WinUIPalette = {
  mode: 'dark',

  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.79)',
    tertiary: 'rgba(255, 255, 255, 0.54)',
    disabled: 'rgba(255, 255, 255, 0.36)',
  },
  accentText: {
    primary: 'rgba(153, 235, 255, 1)',
    secondary: 'rgba(153, 235, 255, 1)',
    tertiary: 'rgba(96, 205, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.36)',
  },
  textOnAccent: {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(0, 0, 0, 0.5)',
    disabled: 'rgba(255, 255, 255, 0.5302)',
    selectedText: 'rgba(255, 255, 255, 1)',
  },

  controlFill: {
    default: 'rgba(255, 255, 255, 0.06)',
    secondary: 'rgba(255, 255, 255, 0.08)',
    tertiary: 'rgba(255, 255, 255, 0.03)',
    disabled: 'rgba(255, 255, 255, 0.04)',
    transparent: 'rgba(255, 255, 255, 0)',
    inputActive: 'rgba(30, 30, 30, 0.7)',
  },
  controlAltFill: {
    transparent: 'rgba(255, 255, 255, 0)',
    secondary: 'rgba(0, 0, 0, 0.1)',
    tertiary: 'rgba(255, 255, 255, 0.04)',
    quarternary: 'rgba(255, 255, 255, 0.07)',
    disabled: 'rgba(255, 255, 255, 0)',
  },
  controlStrongFill: {
    default: 'rgba(255, 255, 255, 0.54)',
    disabled: 'rgba(255, 255, 255, 0.25)',
  },
  subtleFill: {
    transparent: 'rgba(255, 255, 255, 0)',
    secondary: 'rgba(255, 255, 255, 0.06)',
    tertiary: 'rgba(255, 255, 255, 0.04)',
    disabled: 'rgba(255, 255, 255, 0)',
  },
  controlOnImageFill: {
    default: 'rgba(28, 28, 28, 0.7)',
    secondary: 'rgba(26, 26, 26, 1)',
    tertiary: 'rgba(19, 19, 19, 1)',
    disabled: 'rgba(30, 30, 30, 0)',
  },
  accentFill: {
    default: 'rgba(96, 205, 255, 1)',
    secondary: 'rgba(96, 205, 255, 0.9)',
    tertiary: 'rgba(96, 205, 255, 0.8)',
    disabled: 'rgba(255, 255, 255, 0.16)',
    selectedTextBackground: 'rgba(0, 120, 212, 1)',
  },

  controlElevation: {
    controlBorder: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 9.57%)',
    },
    circleBorder: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 50%)',
    },
    textControlBorder: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 99.98%, rgba(255, 255, 255, 0.5442) 100%, rgba(255, 255, 255, 0.5442) 100%)',
    },
    textControlBorderFocused: {
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 96.89%, #4CC2FF 96.9%)',
    },
    accentControlBorder: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 90.67%, rgba(0, 0, 0, 0.14) 100%)',
    },
  },

  controlStroke: {
    default: 'rgba(255, 255, 255, 0.07)',
    secondary: 'rgba(255, 255, 255, 0.09)',
    onAccentDefault: 'rgba(255, 255, 255, 0.08)',
    onAccentSecondary: 'rgba(0, 0, 0, 0.14)',
    onAccentTertiary: 'rgba(0, 0, 0, 0.22)',
    onAccentDisabled: 'rgba(0, 0, 0, 0.2)',
    forStrongFillWhenOnImage: 'rgba(0, 0, 0, 0.42)',
  },
  cardStroke: {
    default: 'rgba(0, 0, 0, 0.1)',
    defaultSolid: 'rgba(28, 28, 28, 1)',
  },
  controlStrongStroke: {
    default: 'rgba(255, 255, 255, 0.54)',
    disabled: 'rgba(255, 255, 255, 0.16)',
  },
  surfaceStroke: {
    default: 'rgba(117, 117, 117, 0.4)',
    flyout: 'rgba(0, 0, 0, 0.2)',
  },
  dividerStroke: {
    default: 'rgba(255, 255, 255, 0.08)',
  },
  focusStroke: {
    outer: 'rgba(255, 255, 255, 1)',
    inner: 'rgba(0, 0, 0, 0.7)',
  },

  cardBackground: {
    default: 'rgba(255, 255, 255, 0.05)',
    secondary: 'rgba(255, 255, 255, 0.03)',
  },
  smokeBackground: {
    default: 'rgba(0, 0, 0, 0.3)',
  },
  layer: {
    default: 'rgba(58, 58, 58, 0.3)',
    alt: 'rgba(255, 255, 255, 0.05)',
  },
  layerOnAcrylic: {
    default: 'rgba(255, 255, 255, 0.04)',
  },
  solidBackground: {
    base: 'rgba(32, 32, 32, 1)',
    secondary: 'rgba(28, 28, 28, 1)',
    tertiary: 'rgba(40, 40, 40, 1)',
    quarternary: 'rgba(44, 44, 44, 1)',
  },
  micaBackground: {
    background: 'linear-gradient(0deg, rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), #202020',
    backgroundBlendMode: 'color, luminosity',
  },
  acrylicBackground: {
    base: {
      background: `url(${noiseAsset256}), linear-gradient(0deg, rgba(32, 32, 32, 0.5), rgba(32, 32, 32, 0.5)), rgba(32, 32, 32, 0.96)`,
      backgroundBlendMode: 'normal, color, luminosity',
    },
    default: {
      background: `url(${noiseAsset256}), linear-gradient(0deg, rgba(44, 44, 44, 0.15), rgba(44, 44, 44, 0.15)), rgba(44, 44, 44, 0.96)`,
      backgroundBlendMode: 'normal, color, luminosity',
    },
  },
  accentAcrylicBackground: {
    base: {
      background: `url(${noiseAsset256}), linear-gradient(0deg, rgba(0, 63, 146, 0.8), rgba(0, 63, 146, 0.8)), rgba(0, 63, 146, 0.8)`,
      backgroundBlendMode: 'normal, color, luminosity',
    },
    default: {
      background: `url(${noiseAsset256}), linear-gradient(0deg, rgba(0, 120, 212, 0.8), rgba(0, 120, 212, 0.8)), rgba(0, 120, 212, 0.8)`,
      backgroundBlendMode: 'normal, color, luminosity',
    },
  },
};

export default darkThemeColors;
