import MenuList from '@wui/core/menu-list'
import MenuItem from '@wui/core/menu-item'
import '@wui/core/menu-list/menu-list.scss'
import '@wui/core/menu-item/menu-item.scss'

describe('menu-list', () => {
  it('should capture keyboard event', () => {
    cy.mount(
      <MenuList>
        <MenuItem>Text</MenuItem>
        <MenuItem>Text</MenuItem>
        <MenuItem>Text</MenuItem>
        <MenuItem>Text</MenuItem>
      </MenuList>
    )
  })
})
