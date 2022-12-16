import React from 'react'
import useChildren from './use-children'
import type { TreeNode } from './create-tree'

export interface TreeItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'children'> {
  node: TreeNode
}

const TreeItem = React.forwardRef<HTMLLIElement, TreeItemProps>(function TreeItem(props, ref) {
  const { node, ...other } = props

  const children = useChildren(node, () => {})

  return (
    <li ref={ref} className="wui-tree-item wui-typography-body" {...other}>
      <div>{node.label}</div>
      {children}
    </li>
  )
})

export default TreeItem
