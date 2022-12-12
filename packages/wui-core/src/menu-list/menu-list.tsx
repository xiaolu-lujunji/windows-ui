import {} from '@mui/base'
import { forwardRef, useRef } from 'react'
import useForkRef from '../hooks/use-fork-ref'
import clsx from 'clsx'
import ownerDocument from '../utils/owner-document'
import moveFocus, { nextItem, previousItem, textCriteriaMatches } from './move-focus'
import type { TextCriteria } from './move-focus'

export interface MenuListProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap?: boolean
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable?: boolean
}

const MenuList = forwardRef<HTMLUListElement, MenuListProps>(function MenuList(props, ref) {
  const {
    disableListWrap = false,
    disabledItemsFocusable = false,
    className,
    onKeyDown,
    children,
    ...other
  } = props

  const listRef = useRef<HTMLUListElement>(null)
  const textCriteriaRef = useRef<TextCriteria>({
    repeating: true,
    keys: [],
    previousKeyMatched: true,
    lastTime: performance.now(),
  })
  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (event) => {
    const list = listRef.current
    const key = event.key

    if (list) {
      /**
       * currentFocus will always be defined since we are in a keydown handler
       * attached to an element. A keydown event is either dispatched to the activeElement
       * or document.body or document.documentElement. Only the first case will
       * trigger this specific handler.
       */
      const currentFocus = ownerDocument(list).activeElement as HTMLLIElement

      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Home' || key === 'End') {
        event.preventDefault()
        moveFocus(list, key === 'ArrowDown' || key === 'ArrowUp' ? currentFocus : null, {
          disableListWrap,
          disabledItemsFocusable,
          traversalFunction: key === 'ArrowDown' || key === 'Home' ? nextItem : previousItem,
          textCriteria: null,
        })
      } else if (key.length === 1) {
        const criteria = textCriteriaRef.current
        const lowerKey = key.toLowerCase()
        const currentTime = performance.now()

        if (criteria.keys.length > 0) {
          // Reset
          if (currentTime - criteria.lastTime > 500) {
            criteria.keys = []
            criteria.repeating = true
            criteria.previousKeyMatched = true
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false
          }
        }

        criteria.lastTime = currentTime
        criteria.keys.push(lowerKey)
        const keepFocusOnCurrent =
          currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria)
        if (
          criteria.previousKeyMatched &&
          (keepFocusOnCurrent ||
            moveFocus(list, currentFocus, {
              disableListWrap: false,
              disabledItemsFocusable,
              traversalFunction: nextItem,
              textCriteria: criteria,
            }))
        ) {
          event.preventDefault()
        } else {
          criteria.previousKeyMatched = false
        }
      }
    }

    if (onKeyDown) {
      onKeyDown(event)
    }
  }

  const handleRef = useForkRef(listRef, ref)

  return (
    <ul
      role="menu"
      ref={handleRef}
      className={clsx('wui-menu-list', 'wui-flyout', className)}
      onKeyDown={handleKeyDown}
      {...other}
    >
      {children}
    </ul>
  )
})

export default MenuList
