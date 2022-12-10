import HyperlinkButton from '@wui/core/hyperlink-button'
import '@wui/core/hyperlink-button/hyperlink-button.scss'

describe('hyperlink-button', () => {
  beforeEach(() => {
    cy.viewport(800, 600)

    cy.mount(<HyperlinkButton style={{ transform: 'scale(4)' }}>Text</HyperlinkButton>)
  })

  it('rest', () => {
    cy.get('.wui-hyperlink-button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it('hover', () => {
    cy.task('activateHoverPseudo', { selector: '.wui-hyperlink-button' })

    cy.get('.wui-hyperlink-button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it('pressed', () => {
    cy.task('activateActivePseudo', { selector: '.wui-hyperlink-button' })

    cy.get('.wui-hyperlink-button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it('disabled', () => {
    cy.mount(
      <HyperlinkButton disabled style={{ transform: 'scale(4)' }}>
        Text
      </HyperlinkButton>
    )

    cy.get('.wui-hyperlink-button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })
})
