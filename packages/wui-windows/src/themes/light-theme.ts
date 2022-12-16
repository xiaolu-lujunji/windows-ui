import type { Theme } from '@emotion/react'

const lightTheme: Theme = {
  wui: {
    colors: {
      text: {
        primary: 'rgba(0, 0, 0, 0.8956)',
        secondary: 'rgba(0, 0, 0, 0.6063)',
        disabled: 'rgba(0, 0, 0, 0.3614)',
      },
      textOnAccent: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: '#ffffff',
      },
      control: {
        default: 'rgba(255, 255, 255, 0.7)',
        secondary: 'rgba(249, 249, 249, 0.5)',
        tertiary: 'rgba(249, 249, 249, 0.3)',
        disabled: 'rgba(249, 249, 249, 0.3)',
      },
      accent: {
        default: '#005fb8',
        secondary: 'rgba(0, 95, 184, 0.9)',
        tertiary: 'rgba(0, 95, 184, 0.8)',
        disabled: 'rgba(0, 0, 0, 0.2169)',
      },
      layer: {
        default: 'rgba(255, 255, 255, 0.5)',
      },
      mica: {
        base: {
          withTintOpacity: 'rgba(243, 243, 243, 0.5)',
          withLuminosityOpacity: 'rgba(243, 243, 243, 1)',
        },
      },
      stroke: {
        control: {
          default: 'rgba(0, 0, 0, 0.0578)',
          onAccentDefault: 'rgba(255, 255, 255, 0.08)',
        },
        card: {
          default: 'rgba(0, 0, 0, 0.0578)',
        },
        focus: {
          outer: 'rgba(0, 0, 0, 0.8956)',
        },
      },
    },
    typography: {
      body: {
        fontFamily: 'Segoe UI Variable',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: '20px',
      },
    },
    elevation: {
      control: {
        '&::before': {
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%)',
        },
      },
      accentControl: {
        '&::before': {
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 90.67%, rgba(0, 0, 0, 0.4) 100%)',
        },
      },
    },
  },
}

export default lightTheme
