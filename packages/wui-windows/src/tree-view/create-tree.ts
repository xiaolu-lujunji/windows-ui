export interface TreeNode {
  label?: React.ReactNode
  children: Descendant[]
}

export interface LeafTreeNode {
  label?: React.ReactNode
}

export interface Tree extends TreeNode {
  isLeaf: (node: Descendant) => node is LeafTreeNode
  findKey: (node: Tree | TreeNode | LeafTreeNode) => number
}

export type Descendant = TreeNode | LeafTreeNode

export type Ancestor = Tree | TreeNode

function isLeaf(node: Descendant): node is LeafTreeNode {
  // @ts-ignore
  return !Array.isArray(node.children)
}

let id = 0
const NODE_TO_KEY = new WeakMap<Tree | TreeNode | LeafTreeNode, number>()
function findKey(node: Tree | TreeNode | LeafTreeNode) {
  let key = NODE_TO_KEY.get(node)

  if (key === undefined) {
    key = id++
    NODE_TO_KEY.set(node, key)
  }

  return key
}

export default function createTree(value: Descendant[]): Tree {
  return {
    children: value,
    isLeaf,
    findKey,
  }
}
