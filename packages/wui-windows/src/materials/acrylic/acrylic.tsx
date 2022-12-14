import React from 'react'
import clsx from 'clsx'

export interface AcrylicProps extends React.HTMLAttributes<HTMLDivElement> {}

const Acrylic = React.forwardRef<HTMLDivElement, AcrylicProps>(function Acrylic(props, ref) {
  const { className, children, ...other } = props

  return (
    <div ref={ref} className={clsx('wui-acrylic', 'wui-dialog-shadow', className)} {...other}>
      <div className="wui-inset-0 wui-acrylic-gaussian-blur"></div>
      <div className="wui-inset-0 wui-luminosity-blend wui-acrylic-background-thin-with-luminosity-opacity"></div>
      <div className="wui-inset-0 wui-color-blend wui-acrylic-background-thin-with-tint-opacity"></div>
      <div className="wui-inset-0 wui-acrylic-noise-texture"></div>
      {children}
    </div>
  )
})

export default Acrylic
