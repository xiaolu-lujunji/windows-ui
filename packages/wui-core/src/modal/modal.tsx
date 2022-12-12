import ModalUnstyled from '@mui/base/ModalUnstyled'
import ModalRoot from './modal-root'
import Backdrop from '../backdrop'
import React from 'react'
import type { ModalUnstyledProps } from '@mui/base/ModalUnstyled'

export interface ModalProps extends Omit<ModalUnstyledProps, 'slots'> {}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
  const { children, ...other } = props

  return (
    <ModalUnstyled
      slots={{
        root: ModalRoot,
        backdrop: Backdrop,
      }}
      ref={ref}
      {...other}
    >
      {children}
    </ModalUnstyled>
  )
})

export default Modal
