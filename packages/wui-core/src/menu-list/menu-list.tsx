import { forwardRef } from 'react'
import clsx from 'clsx'

export interface MenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const MenuList = forwardRef<HTMLUListElement, MenuListProps>(function MenuList(props, ref) {
  const { className, children, ...other } = props

  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (event) => {}

  return (
    <ul
      role="menu"
      ref={ref}
      className={clsx('wui-menu-list', 'wui-flyout', className)}
      onKeyDown={handleKeyDown}
      {...other}
    >
      {children}
    </ul>
  )
})

export default MenuList
