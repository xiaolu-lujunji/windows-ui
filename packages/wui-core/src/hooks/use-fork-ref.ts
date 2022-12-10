import { useMemo } from 'react'

/**
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
export function setRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
}

export default function useForkRef<T>(...refs: React.Ref<T>[]): React.RefCallback<T> | null {
  return useMemo(() => {
    if (refs.every((ref) => ref === null)) return null

    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance)
      })
    }
  }, refs)
}
