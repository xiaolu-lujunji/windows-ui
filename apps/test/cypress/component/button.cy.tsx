import Button from '@wui/core/button'
import '@wui/core/typography/typography.scss'
import '@wui/core/button/button.scss'
import '@wui/core/themes/light.scss'

describe('button', () => {
  it('accent-rest', () => {
    cy.viewport(800, 600)

    cy.mount(<Button style={{ transform: 'scale(4)' }}>Text</Button>)

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it('accent-hover', () => {
    cy.viewport(800, 600)

    cy.mount(<Button style={{ transform: 'scale(4)' }}>Text</Button>)

    cy.task('activateHoverPseudo', { selector: '.wui-button' })

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it('accent-pressed', () => {
    cy.viewport(800, 600)

    cy.mount(<Button style={{ transform: 'scale(4)' }}>Text</Button>)

    cy.task('activateActivePseudo', { selector: '.wui-button' })

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it('accent-disabled', () => {
    cy.viewport(800, 600)

    cy.mount(
      <Button disabled style={{ transform: 'scale(4)' }}>
        Text
      </Button>
    )

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })
})
