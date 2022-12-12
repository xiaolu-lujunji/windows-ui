import { Transition } from 'react-transition-group'
import React from 'react'
import useForkRef from '@wui/hooks/use-fork-ref'

interface FadeProps {
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear?: boolean
  /**
   * If `true`, the component will transition in.
   */
  in: boolean
  /**
   * A single child content element.
   */
  children: React.ReactElement<any, any>
}

const Fade = React.forwardRef<HTMLElement, FadeProps>(function Fade(props, ref) {
  const { appear = true, in: inProp, children } = props

  const nodeRef = React.useRef<HTMLElement>(null)
  const handleRef = useForkRef(nodeRef, ref)

  const handleEnter = () => {
    const node = nodeRef.current
    if (node) {
      node.style.transition = 'opacity 83ms linear 0ms'
    }
  }

  const handleExit = () => {
    const node = nodeRef.current
    if (node) {
      node.style.transition = 'opacity 83ms linear 0ms'
    }
  }

  return (
    <Transition
      appear={appear}
      in={inProp}
      nodeRef={nodeRef}
      onEnter={handleEnter}
      onExit={handleExit}
      addEndListener={() => {}}
    >
      {(state) =>
        React.cloneElement(children, {
          style: {
            opacity: state === 'entering' || state === 'entered' ? 1 : 0,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...children.props.style,
          },
          ref: handleRef,
        })
      }
    </Transition>
  )
})

export default Fade
