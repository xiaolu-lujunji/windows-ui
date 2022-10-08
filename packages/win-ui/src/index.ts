import createTheme from '@mui/material/styles/createTheme';
import noiseAsset256 from './NoiseAsset_256.png';

const theme = createTheme({
  winUI: {},
});

export interface WinUI {}

export interface WinUIPalette {
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

export const lightThemeColors: WinUIPalette = {
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
    disabled: 'rgba(255, 255, 255, 0.7)',
    selectedText: 'rgba(255, 255, 255, 1)',
  },

  controlFill: {
    default: 'rgba(255, 255, 255, 0.7)',
    secondary: 'rgba(249, 249, 249, 0.5)',
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

export const darkThemeColors: WinUIPalette = {
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
    disabled: 'rgba(0, 0, 0, 0.5)',
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

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    winUI: WinUI;
  }
}
