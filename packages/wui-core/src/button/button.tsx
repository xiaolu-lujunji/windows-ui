import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  variant?: 'accent' | 'standard'
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = 'accent', className, children, ...other } = props

  return (
    <button
      className={clsx(
        'wui-button',
        variant,
        'wui-typography-body',
        'wui-elevation',
        'wui-elevation-accentControl-border',
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </button>
  )
})

export default Button
