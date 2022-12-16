/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react'
import Backdrop from './backdrop'
import { lightTheme, darkTheme } from '@wui/windows/themes'

export default function Layout({
  mode,
  children,
}: {
  mode: 'light' | 'dark'
  children?: React.ReactNode
}) {
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <div
        className="w-full h-screen flex"
        css={(theme) => ({
          color: theme.wui.colors.text.primary,
        })}
      >
        <Backdrop mode={mode} />
        <nav className="w-[320px]"></nav>
        <main
          className="flex-1 p-[45px] mt-8 rounded-tl-[7px] border border-solid"
          css={(theme) => ({
            borderColor: theme.wui.colors.stroke.card.default,
            backgroundColor: theme.wui.colors.layer.default,
          })}
        >
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}
