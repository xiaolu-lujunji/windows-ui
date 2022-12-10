import { forwardRef } from 'react'
import clsx from 'clsx'

export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(props, ref) {
  const { className, children, ...other } = props

  return (
    <li className={clsx('wui-menu-item', 'wui-typography-body', className)} ref={ref} {...other}>
      {children}
    </li>
  )
})

export default MenuItem
