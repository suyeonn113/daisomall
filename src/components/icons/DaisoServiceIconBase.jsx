import { iconSize } from '../../tokens/size'

function DaisoServiceIconBase({
  children,
  size = iconSize.md,
  viewBox = '0 0 24 24',
  label,
  className = '',
  ...props
}) {
  const accessibilityProps = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...accessibilityProps}
      {...props}
    >
      {children}
    </svg>
  )
}

export default DaisoServiceIconBase
