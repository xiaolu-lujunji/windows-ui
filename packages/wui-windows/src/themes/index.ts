export { default as lightTheme } from './light-theme'
export { default as darkTheme } from './dark-theme'

declare module '@emotion/react' {
  interface Theme {
    wui: {
      colors: {
        text: {
          primary: string
          secondary: string
          disabled: string
        }

        textOnAccent: {
          primary: string
          secondary: string
          disabled: string
        }

        control: {
          default: string
          secondary: string
          tertiary: string
          disabled: string
        }

        accent: {
          default: string
          secondary: string
          tertiary: string
          disabled: string
        }

        layer: {
          default: string
        }

        mica: {
          base: {
            withTintOpacity: string
            withLuminosityOpacity: string
          }
        }

        stroke: {
          control: {
            default: string
            onAccentDefault: string
          }
          card: {
            default: string
          }
          focus: {
            outer: string
          }
        }
      }

      typography: {
        body: {
          fontFamily: string
          fontWeight: number
          fontSize: number | string
          lineHeight: number | string
        }
      }

      elevation: {
        control: {
          '&::before': {
            background: string
          }
        }
        accentControl: {
          '&::before': {
            background: string
          }
        }
      }
    }
  }
}
