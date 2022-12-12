import { forwardRef } from 'react'
import clsx from 'clsx'

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(props, ref) {
  const { disabled = false, className, children, ...other } = props

  let tabIndex: number | undefined
  if (!disabled) {
    tabIndex = props.tabIndex !== undefined ? props.tabIndex : -1
  }

  return (
    <li
      aria-disabled={disabled}
      role="menuitem"
      tabIndex={tabIndex}
      className={clsx(
        'wui-menu-item',
        'wui-typography-body',
        'wui-focus-stroke',
        disabled && 'wui-disabled',
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </li>
  )
})

export default MenuItem
