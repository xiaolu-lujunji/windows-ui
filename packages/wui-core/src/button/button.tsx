import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   * @default 'accent'
   */
  variant?: 'accent' | 'standard'
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
        !disabled && {
          'wui-elevation-accentControl-border': variant === 'accent',
          'wui-elevation-control-border': variant === 'standard',
        },
        'wui-focus-stroke',
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
