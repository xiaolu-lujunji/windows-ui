import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  variant?: 'accent' | 'standard'
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = 'accent', disabled = false, className, children, ...other } = props

  return (
    <button
      disabled={disabled}
      className={clsx(
        'wui-button',
        variant,
        'wui-typography-body',
        !disabled && 'wui-elevation',
        !disabled && 'wui-elevation-accentControl-border',
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
