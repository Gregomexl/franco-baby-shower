import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}
