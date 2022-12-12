import { forwardRef } from 'react'
import clsx from 'clsx'

interface ModalRootProps extends React.HTMLAttributes<HTMLDivElement> {
  ownerState: {
    open: boolean
    exited: boolean
  }
}

const ModalRoot = forwardRef<HTMLDivElement, ModalRootProps>(function ModalRoot(props, ref) {
  const { ownerState, className, children, ...other } = props

  return (
    <div
      ref={ref}
      className={clsx('wui-modal-root', !ownerState.open && 'wui-hidden', className)}
      {...other}
    >
      {children}
    </div>
  )
})

export default ModalRoot
