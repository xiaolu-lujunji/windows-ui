import React from 'react'
import clsx from 'clsx'

export interface MicaProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant to use.
   * @default 'base'
   */
  variant?: 'base' | 'alt'
}

const Mica = React.forwardRef<HTMLDivElement, MicaProps>(function Mica(props, ref) {
  const { variant = 'base', className, children, ...other } = props

  return (
    <div ref={ref} className={clsx('wui-mica', 'wui-active-window-shadow', className)} {...other}>
      <div className="wui-inset-0 wui-mica-gaussian-blur"></div>
      <div
        className={clsx(
          'wui-inset-0',
          'wui-luminosity-blend',
          variant === 'base'
            ? 'wui-mica-background-with-luminosity-opacity'
            : 'wui-mica-background-alt-with-luminosity-opacity'
        )}
      ></div>
      <div
        className={clsx(
          'wui-inset-0',
          'wui-color-blend',
          variant === 'base'
            ? 'wui-mica-background-with-tint-opacity'
            : 'wui-mica-background-alt-with-tint-opacity'
        )}
      ></div>
      <div className="wui-inset-0 wui-mica-content">{children}</div>
    </div>
  )
})

export default Mica
