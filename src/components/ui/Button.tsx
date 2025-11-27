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
  const baseClasses = "w-full py-4 px-6 rounded-full text-lg flex items-center justify-center gap-3 transition-all shadow-lg"

  const variantClasses = {
    primary: "bg-[#A8D4A8] text-[#4A6B49] hover:bg-[#98C998] hover:shadow-xl font-semibold",
    secondary: "bg-[#F0EDD8] text-[#6A8B74] hover:bg-[#E5E2C8] hover:shadow-xl font-semibold"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: "0 20px 25px -5px rgba(90, 124, 89, 0.3)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
      {children}
    </motion.button>
  )
}
