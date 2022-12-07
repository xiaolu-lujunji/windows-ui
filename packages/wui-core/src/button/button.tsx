import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  variant?: 'accent' | 'standard'
  className?: string
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = 'accent', className, children } = props

  return (
    <button className={clsx('wui-button', variant, 'wui-typography-body', className)} ref={ref}>
      {children}
    </button>
  )
})

export default Button
