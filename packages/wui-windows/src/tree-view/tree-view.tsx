import React from 'react'
import useChildren from './use-children'
import { TreeContext } from './use-tree-static'
import type { Tree } from './create-tree'

export interface TreeViewProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {
  tree: Tree
}

const Children = ({ node }: { node: Tree }) => {
  return <React.Fragment>{useChildren(node, () => {})}</React.Fragment>
}

const TreeView = React.forwardRef<HTMLUListElement, TreeViewProps>(function TreeView(props, ref) {
  const { tree, ...other } = props

  const [context, setContext] = React.useState<{ v: number; tree: Tree }>(() => {
    return { v: 0, tree }
  })

  return (
    <ul role="tree" ref={ref} className="wui-tree-view" {...other}>
      <TreeContext.Provider value={context.tree}>
        <Children node={context.tree} />
      </TreeContext.Provider>
    </ul>
  )
})

export default TreeView
