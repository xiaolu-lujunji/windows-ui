import TreeItem from './tree-item'
import LeafTreeItem from './leaf-tree-item'
import useTreeStatic from './use-tree-static'
import type { Ancestor } from './create-tree'

export default function useChildren(node: Ancestor, renderTreeNode: () => void) {
  const tree = useTreeStatic()

  const children = []
  for (let i = 0; i < node.children.length; i++) {
    const n = node.children[i]
    const key = tree.findKey(n)

    if (tree.isLeaf(n)) {
      children.push(<LeafTreeItem key={key} node={n} />)
    } else {
      children.push(<TreeItem key={key} node={n} />)
    }
  }

  return children
}
