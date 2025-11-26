import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  className?: string
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  icon,
  className = ''
}: ButtonProps) {
  const baseClasses = "w-full py-4 px-6 rounded-full font-medium text-lg flex items-center justify-center gap-3 transition-all shadow-lg"

  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600 hover:shadow-xl",
    secondary: "bg-white text-green-500 border-2 border-green-500 hover:bg-green-50 hover:shadow-xl"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      {children}
    </motion.button>
  )
}
