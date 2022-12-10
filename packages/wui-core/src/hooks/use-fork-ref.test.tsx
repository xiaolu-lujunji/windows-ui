import React from 'react'
import { render } from '@testing-library/react'
import useForkRef from './use-fork-ref'

describe('useForkRef', () => {
  it('returns a single ref-setter function that forks the ref to its inputs', () => {
    function Component(props: { innerRef: React.RefObject<any> }) {
      const { innerRef } = props
      const [ownRefCurrent, ownRef] = React.useState(null)

      const handleRef = useForkRef(innerRef, ownRef)

      return <div ref={handleRef}>{ownRefCurrent ? 'has a ref' : 'has no ref'}</div>
    }

    const outerRef = React.createRef<HTMLDivElement>()

    render(<Component innerRef={outerRef} />)

    expect(outerRef.current?.textContent).toEqual('has a ref')
  })
})
