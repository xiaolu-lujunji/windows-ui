import createTheme from '@mui/material/styles/createTheme';
import type { PaletteMode } from '@mui/material';

// declare module '@mui/material/styles/createTheme' {
//   interface ThemeOptions {
//     winUI?: {
//       palette?: {
//         mode?: PaletteMode;
//         text?: {
//           primary?: string;
//           secondary?: string;
//           disabled?: string;
//         };
//         accentText?: {
//           primary?: string;
//           secondary?: string;
//           tertiary?: string;
//           disabled?: string;
//         };
//         textOnAccent?: {
//           primary?: string;
//           secondary?: string;
//           disabled?: string;
//         };
//         controlFill?: {
//           default?: string;
//           secondary?: string;
//           tertiary?: string;
//           disabled?: string;
//         };
//         subtleFill?: {
//           secondary?: string;
//           tertiary?: string;
//         };
//         accentFill?: {
//           default?: string;
//           secondary?: string;
//           tertiary?: string;
//           disabled?: string;
//         };
//         controlStroke?: {
//           default?: string;
//           onAccentDefault?: string;
//         };
//         focusStroke?: {
//           outer?: string;
//         };
//       };
//       typography?: {
//         body?: {};
//       };
//     };
//   }
//   interface Theme {
//     winUI: {
//       palette: {
//         mode: PaletteMode;
//         text: {
//           primary: string;
//           secondary: string;
//           disabled: string;
//         };
//         accentText: {
//           primary: string;
//           secondary: string;
//           tertiary: string;
//           disabled: string;
//         };
//         textOnAccent: {
//           primary: string;
//           secondary: string;
//           disabled: string;
//         };
//         controlFill: {
//           default: string;
//           secondary: string;
//           tertiary: string;
//           disabled: string;
//         };
//         subtleFill: {
//           secondary: string;
//           tertiary: string;
//         };
//         accentFill: {
//           default: string;
//           secondary: string;
//           tertiary: string;
//           disabled: string;
//         };
//         controlStroke: {
//           default: string;
//           onAccentDefault: string;
//         };
//         focusStroke: {
//           outer: string;
//         };
//       };
//       typography: {
//         body: {};
//       };
//     };
//   }
// }

const defaultTheme = createTheme({
  winUI: {
    palette: {
      mode: 'light',
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
    },
    typography: {
      body: {
        fontFamily: 'Segoe UI Variable',
        fontSize: 14,
        lineHeight: '20px',
      },
    },
  },
  components: {
    WinUIButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default defaultTheme;
