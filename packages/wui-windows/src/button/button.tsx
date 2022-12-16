import React from 'react'
import styled from '@emotion/styled'
import { rootShouldForwardProp } from '../utils'

const ButtonRoot = styled('button', {
  shouldForwardProp: rootShouldForwardProp,
})<{ ownerState: { variant: 'accent' | 'standard' } }>([
  {
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 32,
    backgroundColor: 'transparent',
    borderRadius: 4,
    border: 'none',
  },
  ({ theme }) => ({
    ...theme.wui.typography.body,
    '&:focus-visible': {
      outline: `2px solid ${theme.wui.colors.stroke.focus.outer}`,
      outlineOffset: 1,
    },
  }),
  ({ ownerState, theme }) =>
    ownerState.variant === 'accent' && {
      color: theme.wui.colors.textOnAccent.primary,
      backgroundColor: theme.wui.colors.accent.default,
      '&:hover': {
        backgroundColor: theme.wui.colors.accent.secondary,
      },
      '&:active': {
        color: theme.wui.colors.textOnAccent.secondary,
        backgroundColor: theme.wui.colors.accent.tertiary,
        '&::before': {
          background: theme.wui.colors.stroke.control.onAccentDefault,
        },
      },
      '&:disabled': {
        color: theme.wui.colors.textOnAccent.disabled,
        backgroundColor: theme.wui.colors.accent.disabled,
      },
    },
  ({ ownerState, theme }) =>
    ownerState.variant === 'standard' && {
      color: theme.wui.colors.text.primary,
      backgroundColor: theme.wui.colors.control.default,
      '&:hover': {
        backgroundColor: theme.wui.colors.control.secondary,
      },
      '&:active': {
        color: theme.wui.colors.text.secondary,
        backgroundColor: theme.wui.colors.control.tertiary,
        '&::before': {
          background: theme.wui.colors.stroke.control.default,
        },
      },
      '&:disabled': {
        color: theme.wui.colors.text.disabled,
        backgroundColor: theme.wui.colors.control.disabled,
        border: `1px solid ${theme.wui.colors.stroke.control.default}`,
      },
    },
  ({ disabled }) =>
    !disabled && {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        padding: 1,
        borderRadius: 4,
        maskImage: 'linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)',
        maskClip: 'content-box, border-box',
        maskComposite: 'xor',
      },
    },
  ({ ownerState, disabled, theme }) =>
    ownerState.variant === 'accent' && !disabled && theme.wui.elevation.accentControl,
  ({ ownerState, disabled, theme }) =>
    ownerState.variant === 'standard' && !disabled && theme.wui.elevation.control,
])

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   * @default 'accent'
   */
  variant?: 'accent' | 'standard'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant = 'accent', children, ...other } = props

  const ownerState = {
    variant,
  }

  return (
    <ButtonRoot ownerState={ownerState} ref={ref} {...other}>
      {children}
    </ButtonRoot>
  )
})

export default Button
