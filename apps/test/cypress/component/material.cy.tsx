import Mica from '@wui/windows/materials/mica'
import Acrylic from '@wui/windows/materials/acrylic'
import '@wui/windows/materials/mica/mica.scss'
import '@wui/windows/materials/acrylic/acrylic.scss'

describe('material', () => {
  beforeEach(() => {
    cy.viewport(1200, 675)
  })

  it.skip('mica-base', () => {
    cy.mount(
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'url(https://s3-alpha-sig.figma.com/img/b0f3/2be2/060b15e95908ee1c1d40fa10b8d9e951?Expires=1672012800&Signature=HoFmnbsEY3hE6KEg8oSOxXiythvGz4s2DRjofq~COGCMhrjXlF5Whx7dJHGygcXHQuNzmYhlGvG3YUHAdrmho5zFiwdcZhsYKVuzzg1WsQ2PXti4EQRpw7xGzuD9bFmQ9Sgw7pv6fbuxRe5JXn5FrTQU4vxhrw11ub864AJ0BrHfH2RVBFQfu9WFz4kAPPtBuTXSmLixAJTz1U6f0M424U0tlgfoJKDheHMLw2WEMolyZcjawXSBsOxJZaT5mxLZzRN3eazkq~hK0kcH7w~8ne93Q6MaT4UKh2ebmGBq~~GMhpoUFzyfmB1KwT8DcWRD5GZHnukL44zbADPxdS0HrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        }}
      >
        <Mica style={{ width: 600, height: 400, marginLeft: 375, marginTop: 138 }}></Mica>
      </div>
    )

    cy.get('.wui-mica').matchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })

  it.skip('mica-alt', () => {
    cy.mount(
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'url(https://s3-alpha-sig.figma.com/img/b0f3/2be2/060b15e95908ee1c1d40fa10b8d9e951?Expires=1672012800&Signature=HoFmnbsEY3hE6KEg8oSOxXiythvGz4s2DRjofq~COGCMhrjXlF5Whx7dJHGygcXHQuNzmYhlGvG3YUHAdrmho5zFiwdcZhsYKVuzzg1WsQ2PXti4EQRpw7xGzuD9bFmQ9Sgw7pv6fbuxRe5JXn5FrTQU4vxhrw11ub864AJ0BrHfH2RVBFQfu9WFz4kAPPtBuTXSmLixAJTz1U6f0M424U0tlgfoJKDheHMLw2WEMolyZcjawXSBsOxJZaT5mxLZzRN3eazkq~hK0kcH7w~8ne93Q6MaT4UKh2ebmGBq~~GMhpoUFzyfmB1KwT8DcWRD5GZHnukL44zbADPxdS0HrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        }}
      >
        <Mica
          variant="alt"
          style={{ width: 600, height: 400, marginLeft: 375, marginTop: 143 }}
        ></Mica>
      </div>
    )

    cy.get('.wui-mica').matchImageSnapshot({
      failureThreshold: 0.02,
      failureThresholdType: 'percent',
    })
  })

  it.skip('acrylic-thin', () => {
    cy.mount(
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'url(https://s3-alpha-sig.figma.com/img/b0f3/2be2/060b15e95908ee1c1d40fa10b8d9e951?Expires=1672012800&Signature=HoFmnbsEY3hE6KEg8oSOxXiythvGz4s2DRjofq~COGCMhrjXlF5Whx7dJHGygcXHQuNzmYhlGvG3YUHAdrmho5zFiwdcZhsYKVuzzg1WsQ2PXti4EQRpw7xGzuD9bFmQ9Sgw7pv6fbuxRe5JXn5FrTQU4vxhrw11ub864AJ0BrHfH2RVBFQfu9WFz4kAPPtBuTXSmLixAJTz1U6f0M424U0tlgfoJKDheHMLw2WEMolyZcjawXSBsOxJZaT5mxLZzRN3eazkq~hK0kcH7w~8ne93Q6MaT4UKh2ebmGBq~~GMhpoUFzyfmB1KwT8DcWRD5GZHnukL44zbADPxdS0HrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        }}
      >
        <Acrylic style={{ width: 602, height: 602, marginLeft: 298, marginTop: 12 }}></Acrylic>
      </div>
    )

    cy.get('.wui-acrylic').matchImageSnapshot({
      // failureThreshold: 0.01,
      failureThresholdType: 'percent',
    })
  })
})
