import Hyperlink from '@wui/core/hyperlink'
import '@wui/core/hyperlink/hyperlink.scss'

describe('hyperlink', () => {
  beforeEach(() => {
    cy.viewport(800, 600)

    cy.mount(
      <Hyperlink href="https://www.github.com/" style={{ transform: 'scale(4)' }}>
        Text
      </Hyperlink>
    )
  })

  it.skip('rest', () => {
    cy.get('.wui-hyperlink').matchImageSnapshot({
      // failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it.skip('hover', () => {
    cy.task('activateHoverPseudo', { selector: '.wui-hyperlink' })

    cy.get('.wui-hyperlink').matchImageSnapshot({
      // failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it.skip('pressed', () => {
    cy.task('activateActivePseudo', { selector: '.wui-hyperlink' })

    cy.get('.wui-hyperlink').matchImageSnapshot({
      // failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it.skip('disabled', () => {
    cy.mount(
      <Hyperlink disabled href="https://www.github.com/" style={{ transform: 'scale(4)' }}>
        Text
      </Hyperlink>
    )

    cy.get('.wui-hyperlink').matchImageSnapshot({
      // failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })
})
