import React from 'react'
import clsx from 'clsx'

export interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The mode to use.
   * @default 'light'
   */
  mode?: 'light' | 'dark'
}

const ThemeProvider = React.forwardRef<HTMLDivElement, ThemeProviderProps>(function ThemeProvider(
  props,
  ref
) {
  const { mode = 'light', className, children, ...other } = props

  return (
    <div
      ref={ref}
      className={clsx('wui-theme-provider', mode === 'light' ? 'light' : 'dark', className)}
      {...other}
    >
      {children}
    </div>
  )
})

export default ThemeProvider
