import { forwardRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Menu from '../menu'
import MenuItem from '../menu-item'
import SvgIcon from '../svg-icon'

const ChevronRight = () => {
  return (
    <SvgIcon width="12" height="12" viewBox="0 0 24 24" className="wui-chevron-right">
      <path d="M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z" />
    </SvgIcon>
  )
}

export interface SubMenuProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The content of the component.
   */
  content?: React.ReactNode
}

const SubMenu = forwardRef<HTMLLIElement, SubMenuProps>(function SubMenu(props, ref) {
  const { content, children, ...other } = props

  const [openSubMenu, setOpenSubMenu] = useState(true)

  const handlePointerMove: React.PointerEventHandler<HTMLLIElement> = (event) => {}

  return (
    <MenuItem ref={ref} onPointerMove={handlePointerMove} {...other}>
      <div className="wui-menu-item-content-container">{content}</div>
      <ChevronRight />
      {createPortal(<Menu open={openSubMenu}>{children}</Menu>, document.body)}
    </MenuItem>
  )
})

export default SubMenu
