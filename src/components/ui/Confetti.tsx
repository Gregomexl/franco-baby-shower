import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  delay: number
}

interface ConfettiProps {
  trigger: boolean
}

const colors = ['#5a7c59', '#7a9a79', '#c5e0c5', '#d4e2d4', '#c4a484', '#f5c842', '#ffffff']

export function Confetti({ trigger }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (trigger) {
      const newPieces: ConfettiPiece[] = []
      for (let i = 0; i < 80; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -20,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)] ?? '#ffffff',
          delay: Math.random() * 0.3,
        })
      }
      setPieces(newPieces)

      // Clear confetti after animation
      setTimeout(() => {
        setPieces([])
      }, 4000)
    }
  }, [trigger])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      <AnimatePresence>
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute"
            style={{
              left: piece.x,
              top: piece.y,
            }}
            initial={{
              y: -20,
              opacity: 1,
              rotate: piece.rotation,
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [1, 1, 0],
              rotate: piece.rotation + 720,
              x: [0, (Math.random() - 0.5) * 100],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              delay: piece.delay,
              ease: 'easeIn',
            }}
          >
            <div
              className="w-4 h-4 rounded-sm shadow-lg"
              style={{ backgroundColor: piece.color }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
