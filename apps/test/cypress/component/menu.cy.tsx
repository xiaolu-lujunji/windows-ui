import { Fragment, useRef, useState } from 'react'
import Button from '@wui/core/button'
import Menu from '@wui/core/menu'
import MenuItem from '@wui/core/menu-item'
import '@wui/core/button/button.scss'
import '@wui/core/typography/typography.scss'
import '@wui/core/menu-list/menu-list.scss'
import '@wui/core/sub-menu/sub-menu.scss'
import '@wui/core/menu-item/menu-item.scss'
import '@wui/core/svg-icon/svg-icon.scss'

function BasicExample() {
  const [open, setOpen] = useState(false)

  const anchorRef = useRef<HTMLButtonElement>(null)

  return (
    <Fragment>
      <Button variant="standard" ref={anchorRef} onClick={() => setOpen(!open)}>
        Text
      </Button>
      <Menu open={open} anchorEl={anchorRef.current} onClose={() => setOpen(false)}>
        <MenuItem>Text</MenuItem>
        <MenuItem>Text</MenuItem>
        <MenuItem disabled>Text</MenuItem>
        <MenuItem>Text</MenuItem>
      </Menu>
    </Fragment>
  )
}

describe('menu', () => {
  beforeEach(() => {
    // cy.viewport(800, 600)
  })

  it('should capture keyboard event', () => {
    cy.mount(<BasicExample />)
  })
})
