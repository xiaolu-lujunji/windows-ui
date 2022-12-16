import type { Theme } from '@emotion/react'

const darkTheme: Theme = {
  wui: {
    colors: {
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.786)',
        disabled: 'rgba(255, 255, 255, 0.3628)',
      },
      textOnAccent: {
        primary: '#000000',
        secondary: 'rgba(0, 0, 0, 0.5)',
        disabled: 'rgba(0, 0, 0, 0.5)',
      },
      control: {
        default: 'rgba(255, 255, 255, 0.0605)',
        secondary: 'rgba(255, 255, 255, 0.0837)',
        tertiary: 'rgba(255, 255, 255, 0.0326)',
        disabled: 'rgba(255, 255, 255, 0.0419)',
      },
      accent: {
        default: '#60cdff',
        secondary: 'rgba(96, 205, 255, 0.9)',
        tertiary: 'rgba(96, 205, 255, 0.8)',
        disabled: 'rgba(255, 255, 255, 0.1581)',
      },
      layer: {
        default: 'rgba(58, 58, 58, 0.3)',
      },
      mica: {
        base: {
          withTintOpacity: 'rgba(32, 32, 32, 0.8)',
          withLuminosityOpacity: 'rgba(32, 32, 32, 1)',
        },
      },
      stroke: {
        control: {
          default: 'rgba(255, 255, 255, 0.0698)',
          onAccentDefault: 'rgba(255, 255, 255, 0.08)',
        },
        card: {
          default: 'rgba(0, 0, 0, 0.1)',
        },
        focus: {
          outer: '#ffffff',
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
            'linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 9.57%)',
        },
      },
      accentControl: {
        '&::before': {
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 90.67%, rgba(0, 0, 0, 0.14) 100%)',
        },
      },
    },
  },
}

export default darkTheme
