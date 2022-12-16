import React from 'react'
import type { LeafTreeNode } from './create-tree'

export interface LeafTreeItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'children'> {
  node: LeafTreeNode
}

const LeafTreeItem = React.forwardRef<HTMLLIElement, LeafTreeItemProps>(function LeafTreeItem(
  props,
  ref
) {
  const { node, ...other } = props

  return (
    <li ref={ref} {...other}>
      {node.label}
    </li>
  )
})

export default LeafTreeItem
