import Button from '@wui/core/button'
import '@wui/core/typography/typography.scss'
import '@wui/core/button/button.scss'
import '@wui/core/themes/light.scss'

describe('button', () => {
  it('accent', () => {
    cy.viewport(800, 600)

    cy.mount(<Button style={{ transform: 'scale(4)' }}>Text</Button>)

    // cy.get('button').

    // match element snapshot
    cy.get('button').matchImageSnapshot()
  })
})
