import React from 'react'
import clsx from 'clsx'

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible?: boolean
  /**
   * If `true`, the component is shown.
   */
  open: boolean
}

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(props, ref) {
  const { style, className, invisible = false, open, children, ...other } = props

  return (
    <div
      aria-hidden
      style={{
        opacity: open ? 1 : 0,
        ...style,
      }}
      className={clsx('wui-backdrop', invisible && 'wui-backdrop-invisible', className)}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  )
})

export default Backdrop
