import { SVGProps } from 'react'

interface TriangleIconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export function TriangleIcon({ className = '', ...props }: TriangleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className}`}
      {...props}
    >
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  )
}

