import React from 'react'
import Button from '../button'

export interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button is rendered in an active state.
   */
  selected?: boolean
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(function ToggleButton(
  props,
  ref
) {
  const { selected, children, ...other } = props

  return (
    <Button variant={selected ? 'accent' : 'standard'} ref={ref} {...other}>
      {children}
    </Button>
  )
})

export default ToggleButton
