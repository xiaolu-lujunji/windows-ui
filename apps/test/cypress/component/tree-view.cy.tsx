import React from 'react'
import ThemeProvider from '@wui/windows/theme-provider'
import TreeView, { createTree } from '@wui/windows/tree-view'
import '@wui/windows/theme-provider/theme-provider.scss'
import '@wui/windows/tree-view/tree-view.scss'

function BasicExample() {
  const tree = React.useMemo(
    () =>
      createTree([
        { label: 'Basic Input', children: [] },
        { label: 'Collections', children: [] },
      ]),
    []
  )

  return (
    <ThemeProvider>
      <TreeView tree={tree} />
    </ThemeProvider>
  )
}

describe('tree-view', () => {
  it('basic-example', () => {
    cy.mount(<BasicExample />)
  })
})
