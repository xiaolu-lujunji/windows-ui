import ThemeProvider from '@wui/windows/theme-provider'
import Backdrop from './backdrop'

export default function Layout({
  mode,
  children,
}: {
  mode: 'light' | 'dark'
  children?: React.ReactNode
}) {
  return (
    <ThemeProvider mode={mode} className="w-full h-screen flex">
      <Backdrop mode={mode} />
      <nav className="w-[320px]"></nav>
      <main className="flex-1 p-[45px] mt-8 rounded-tl-[7px] border border-solid border-[var(--card-stroke-default)] bg-[var(--background-layer-default)]">
        {children}
      </main>
    </ThemeProvider>
  )
}
