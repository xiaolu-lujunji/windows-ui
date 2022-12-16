import Button from '@wui/windows/button'

describe.skip('button', () => {
  beforeEach(() => {
    cy.viewport(800, 600)

    cy.mount(
      <div
        className="wui-button-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 504,
          height: 152,
          backgroundColor: '#fafafa',
        }}
      >
        <Button style={{ transform: 'scale(4)' }}>Text</Button>
      </div>
    )
  })

  it('accent-rest', () => {
    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it('accent-hover', () => {
    cy.task('activateHoverPseudo', { selector: 'button' })

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it('accent-pressed', () => {
    cy.task('activateActivePseudo', { selector: 'button' })

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it('accent-disabled', () => {
    cy.mount(
      <div
        className="wui-button-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 504,
          height: 152,
          backgroundColor: '#fafafa',
        }}
      >
        <Button disabled style={{ transform: 'scale(4)' }}>
          Text
        </Button>
      </div>
    )

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it.skip('accent-focus', () => {
    cy.task('activateFocusVisiblePseudo', { selector: 'button' })

    cy.get('.wui-button-container').matchImageSnapshot({
      // failureThreshold: 0.03,
      failureThresholdType: 'percent',
    })
  })
})

describe.skip('button-standard', () => {
  beforeEach(() => {
    cy.viewport(800, 600)

    cy.mount(
      <div
        className="wui-button-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 504,
          height: 152,
          backgroundColor: '#fafafa',
        }}
      >
        <Button variant="standard" style={{ transform: 'scale(4)' }}>
          Text
        </Button>
      </div>
    )
  })

  it('rest', () => {
    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.06,
      failureThresholdType: 'percent',
    })
  })

  it('hover', () => {
    cy.task('activateHoverPseudo', { selector: 'button' })

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it('pressed', () => {
    cy.task('activateActivePseudo', { selector: 'button' })

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it('disabled', () => {
    cy.mount(
      <div
        className="wui-button-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 504,
          height: 152,
          backgroundColor: '#fafafa',
        }}
      >
        <Button variant="standard" disabled style={{ transform: 'scale(4)' }}>
          Text
        </Button>
      </div>
    )

    cy.get('button').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it.skip('focus', () => {
    cy.task('activateFocusVisiblePseudo', { selector: 'button' })

    cy.get('.wui-button-container').matchImageSnapshot({
      // failureThreshold: 0.06,
      failureThresholdType: 'percent',
    })
  })
})
