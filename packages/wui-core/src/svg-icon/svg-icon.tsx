import clsx from 'clsx'
import { forwardRef } from 'react'

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(props, ref) {
  const {
    className,
    viewBox = '0 0 24 24',
    width = '1em',
    height = '1em',
    fill = 'currentColor',
    children,
    ...other
  } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      focusable={false}
      ref={ref}
      className={clsx('wui-svg-icon', className)}
      {...other}
    >
      {children}
    </svg>
  )
})

export default SvgIcon
