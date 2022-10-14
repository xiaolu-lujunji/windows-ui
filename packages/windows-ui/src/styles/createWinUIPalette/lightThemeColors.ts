import noiseAsset256 from './NoiseAsset_256.png';
import type { WinUIPalette } from './createWinUIPalette';

const lightThemeColors: WinUIPalette = {
  mode: 'light',

  text: {
    primary: 'rgba(0, 0, 0, 0.9)',
    secondary: 'rgba(0, 0, 0, 0.61)',
    tertiary: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.36)',
  },
  accentText: {
    primary: 'rgba(0, 62, 146, 1)',
    secondary: 'rgba(0, 26, 104, 1)',
    tertiary: 'rgba(0, 95, 184, 1)',
    disabled: 'rgba(0, 0, 0, 0.36)',
  },
  textOnAccent: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: '#fff',
    selectedText: 'rgba(255, 255, 255, 1)',
  },

  controlFill: {
    default: 'rgba(255, 255, 255, 0.7)',
    secondary: 'rgba(249, 249, 249, 0.6)',
    tertiary: 'rgba(249, 249, 249, 0.3)',
    disabled: 'rgba(249, 249, 249, 0.3)',
    transparent: 'rgba(255, 255, 255, 0)',
    inputActive: 'rgba(255, 255, 255, 1)',
  },
  controlAltFill: {
    transparent: 'rgba(255, 255, 255, 0)',
    secondary: 'rgba(0, 0, 0, 0.02)',
    tertiary: 'rgba(0, 0, 0, 0.06)',
    quarternary: 'rgba(0, 0, 0, 0.09)',
    disabled: 'rgba(255, 255, 255, 0)',
  },
  controlStrongFill: {
    default: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.32)',
  },
  subtleFill: {
    transparent: 'rgba(255, 255, 255, 0)',
    secondary: 'rgba(0, 0, 0, 0.04)',
    tertiary: 'rgba(0, 0, 0, 0.02)',
    disabled: 'rgba(0, 0, 0, 0)',
  },
  controlOnImageFill: {
    default: 'rgba(255, 255, 255, 0.79)',
    secondary: 'rgba(243, 243, 243, 1)',
    tertiary: 'rgba(235, 235, 235, 1)',
    disabled: 'rgba(255, 255, 255, 0)',
  },
  accentFill: {
    default: 'rgba(0, 95, 184, 1)',
    secondary: 'rgba(0, 95, 184, 0.9)',
    tertiary: 'rgba(0, 95, 184, 0.8)',
    disabled: 'rgba(0, 0, 0, 0.22)',
    selectedTextBackground: 'rgba(0, 120, 212, 1)',
  },

  controlElevation: {
    controlBorder: {
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%)',
    },
    circleBorder: {
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 50.02%, rgba(0, 0, 0, 0.1622) 95.45%)',
    },
    textControlBorder: {
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 99.99%, rgba(0, 0, 0, 0.4458) 100%)',
    },
    textControlBorderFocused: {
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 96.87%, #0067C0 96.89%)',
    },
    accentControlBorder: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 90.67%, rgba(0, 0, 0, 0.4) 100%)',
    },
  },

  controlStroke: {
    default: 'rgba(0, 0, 0, 0.06)',
    secondary: 'rgba(0, 0, 0, 0.16)',
    onAccentDefault: 'rgba(255, 255, 255, 0.08)',
    onAccentSecondary: 'rgba(0, 0, 0, 0.4)',
    onAccentTertiary: 'rgba(0, 0, 0, 0.22)',
    onAccentDisabled: 'rgba(0, 0, 0, 0.06)',
    forStrongFillWhenOnImage: 'rgba(255, 255, 255, 0.35)',
  },
  cardStroke: {
    default: 'rgba(0, 0, 0, 0.06)',
    defaultSolid: 'rgba(235, 235, 235, 1)',
  },
  controlStrongStroke: {
    default: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.22)',
  },
  surfaceStroke: {
    default: 'rgba(117, 117, 117, 0.4)',
    flyout: 'rgba(0, 0, 0, 0.06)',
  },
  dividerStroke: {
    default: 'rgba(0, 0, 0, 0.08)',
  },
  focusStroke: {
    outer: 'rgba(0, 0, 0, 0.9)',
    inner: 'rgba(255, 255, 255, 1)',
  },

  cardBackground: {
    default: 'rgba(255, 255, 255, 0.7)',
    secondary: 'rgba(246, 246, 246, 0.5)',
  },
  smokeBackground: {
    default: 'rgba(0, 0, 0, 0.3)',
  },
  layer: {
    default: 'rgba(255, 255, 255, 0.5)',
    alt: 'rgba(255, 255, 255, 1)',
  },
  layerOnAcrylic: {
    default: 'rgba(255, 255, 255, 0.25)',
  },
  solidBackground: {
    base: 'rgba(243, 243, 243, 1)',
    secondary: 'rgba(238, 238, 238, 1)',
    tertiary: 'rgba(249, 249, 249, 1)',
    quarternary: 'rgba(255, 255, 255, 1)',
  },
  micaBackground: {
    background:
      'linear-gradient(0deg, rgba(243, 243, 243, 0.5), rgba(243, 243, 243, 0.5)), #F3F3F3',
    backgroundBlendMode: 'color, luminosity',
  },
  acrylicBackground: {
    base: {
      background: `url(${noiseAsset256}), rgba(243, 243, 243, 0.9)`,
      backgroundBlendMode: 'normal, luminosity',
    },
    default: {
      background: `url(${noiseAsset256}), rgba(252, 252, 252, 0.85)`,
      backgroundBlendMode: 'normal, luminosity',
    },
  },
  accentAcrylicBackground: {
    base: {
      background: `url(${noiseAsset256}), linear-gradient(0deg, rgba(153, 235, 255, 0.8), rgba(153, 235, 255, 0.8)), rgba(153, 235, 255, 0.9)`,
      backgroundBlendMode: 'normal, color, luminosity',
    },
    default: {
      background: `url(${noiseAsset256}), linear-gradient(0deg, rgba(153, 235, 255, 0.8), rgba(153, 235, 255, 0.8)), rgba(153, 235, 255, 0.9)`,
      backgroundBlendMode: 'normal, color, luminosity',
    },
  },
};

export default lightThemeColors;
