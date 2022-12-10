import { forwardRef } from 'react'
import clsx from 'clsx'

export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
}

const Hyperlink = forwardRef<HTMLAnchorElement, HyperlinkProps>(function Hyperlink(props, ref) {
  const { disabled = false, href, className, children, ...other } = props

  return (
    <a
      href={disabled ? undefined : href}
      className={clsx('wui-hyperlink', disabled && 'wui-disabled', className)}
      ref={ref}
      {...other}
    >
      {children}
    </a>
  )
})

export default Hyperlink
