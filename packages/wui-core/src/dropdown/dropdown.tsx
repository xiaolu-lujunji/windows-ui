import { Children, cloneElement, forwardRef, Fragment, isValidElement, useState } from 'react'
import { useFloating } from '@floating-ui/react'
import { createPortal } from 'react-dom'
import Button from '../button'
import MenuList from '../menu-list'
import useForkRef from '../hooks/use-fork-ref'

function areEqualValues<T>(a: T, b: T) {
  if (typeof b === 'object' && b !== null) {
    return a === b
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b)
}

export interface DropdownProps<T = unknown> {
  value: T
  children?: React.ReactNode
}

const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(function Dropdown(props, ref) {
  const { value, children, ...other } = props

  const [open, setOpen] = useState(false)
  const { x, y, reference, floating, strategy } = useFloating({
    open,
    placement: 'bottom',
    onOpenChange: setOpen,
  })

  let display
  const items = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return null

    if (process.env.NODE_ENV !== 'production') {
      if (child.type === Fragment) {
        console.error(
          [
            "The Select component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n')
        )
      }
    }

    let selected = false
    if (areEqualValues(value, child.props.value)) {
      selected = true
      display = child.props.children
    }

    return cloneElement(child, {
      selected,
    })
  })

  const handleRef = useForkRef(reference, ref)

  return (
    <Fragment>
      <Button ref={handleRef}>{display}</Button>
      {createPortal(
        <MenuList
          ref={floating}
          style={{
            display: open ? undefined : 'none',
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
          }}
        >
          {items}
        </MenuList>,
        document.body
      )}
    </Fragment>
  )
})

export default Dropdown
