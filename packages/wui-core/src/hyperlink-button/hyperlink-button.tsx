import { forwardRef } from 'react'
import clsx from 'clsx'

export interface HyperlinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
}

const HyperlinkButton = forwardRef<HTMLAnchorElement, HyperlinkButtonProps>(
  function HyperlinkButton(props, ref) {
    const { disabled = false, href, className, children, ...other } = props

    return (
      <a
        role="button"
        href={disabled ? undefined : href}
        className={clsx(
          'wui-hyperlink-button',
          'wui-typography-body',
          disabled && 'wui-disabled',
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </a>
    )
  }
)

export default HyperlinkButton
