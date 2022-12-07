import Button from '@wui/core/button'
import '@wui/core/typography/typography.scss'
import '@wui/core/button/button.scss'
import '@wui/core/themes/light.scss'

describe('button', () => {
  it('accent', () => {
    // Screenshot a full page
    // cy.argosScreenshot('home');
    cy.mount(<Button>Text</Button>)

    // match element snapshot
    cy.get('button').matchImageSnapshot()
  })
})
