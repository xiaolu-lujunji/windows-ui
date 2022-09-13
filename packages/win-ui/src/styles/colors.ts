export interface Colors {
  text: {
    primary: string;
    secondary: string;
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
  };

  controlFill: {
    default: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };
  controlAltFill: {};
  controlStrongFill: {};
  subtleFill: {
    secondary: string;
    tertiary: string;
  };
  controlOnImageFill: {};
  accentFill: {
    default: string;
    secondary: string;
    tertiary: string;
    disabled: string;
  };

  controlElevation: {};

  controlStroke: {
    default: string;
    onAccentDefault: string;
  };
  cardStroke: {};
  controlStrongStroke: {};
  surfaceStroke: {};
  dividerStroke: {};
  focusStroke: {
    outer: string;
  };

  cardBackground: {};
  smokeBackground: {};
  layer: {};
  layerOnAcrylic: {};
  solidBackground: {};
  micaBackground: {};
  acrylicBackground: {};
  accentAcrylicBackground: {};
}

export const lightThemeColors: Colors = {
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
  controlAltFill: {},
  controlStrongFill: {},
  subtleFill: {
    secondary: 'rgba(0, 0, 0, 0.0373)',
    tertiary: 'rgba(0, 0, 0, 0.0241)',
  },
  controlOnImageFill: {},
  accentFill: {
    default: '#005fb8',
    secondary: 'rgba(0, 95, 184, 0.9)',
    tertiary: 'rgba(0, 95, 184, 0.8)',
    disabled: 'rgba(0, 0, 0, 0.2169)',
  },

  controlElevation: {},

  controlStroke: {
    default: 'rgba(0, 0, 0, 0.0578)',
    onAccentDefault: 'rgba(255, 255, 255, 0.08)',
  },
  cardStroke: {},
  controlStrongStroke: {},
  surfaceStroke: {},
  dividerStroke: {},
  focusStroke: {
    outer: 'rgba(0, 0, 0, 0.8956)',
  },

  cardBackground: {},
  smokeBackground: {},
  layer: {},
  layerOnAcrylic: {},
  solidBackground: {},
  micaBackground: {},
  acrylicBackground: {},
  accentAcrylicBackground: {},
};
