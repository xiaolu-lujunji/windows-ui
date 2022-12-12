import { forwardRef } from 'react'
import { useFloating, useDismiss, useInteractions } from '@floating-ui/react'
import useForkRef from '../hooks/use-fork-ref'
import MenuList from '../menu-list'
import type { ReferenceElement } from '@floating-ui/react'

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * If `true`, the component is shown.
   */
  open: boolean
  /**
   * This is the element that is being referred to for positioning.
   * Often this is a button that triggers a popup like a tooltip or menu.
   */
  anchorEl: ReferenceElement | null
  /**
   * Callback fired when the component requests to be closed.
   */
  onOpenChange: () => void
}

const Menu = forwardRef<HTMLUListElement, MenuProps>(function Menu(props, ref) {
  const { open, anchorEl, style, children, ...other } = props

  const { x, y, reference, floating, strategy, context } = useFloating({
    placement: 'bottom',
  })
  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss])

  const handleRef = useForkRef(floating, ref)

  return (
    <MenuList
      ref={handleRef}
      style={{
        ...style,
        display: open ? undefined : 'none',
        position: strategy,
        top: y ?? 0,
        left: x ?? 0,
        width: 'max-content',
      }}
      {...other}
    >
      {children}
    </MenuList>
  )
})

export default Menu
