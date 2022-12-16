import React, { useContext } from 'react'
import type { Tree } from './create-tree'

export const TreeContext = React.createContext<Tree | null>(null)

export default function useTreeStatic(): Tree {
  const tree = React.useContext(TreeContext)

  if (!tree) {
    throw new Error(
      "The `useTreeStatic` hook must be used inside the <TreeView> component's useContext."
    )
  }

  return tree
}
