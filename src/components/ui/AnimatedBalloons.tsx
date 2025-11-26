import { motion } from 'framer-motion'

interface Balloon {
  id: number
  color: string
  x: string
  delay: number
  duration: number
}

const balloons: Balloon[] = [
  { id: 1, color: '#5a7c59', x: '8%', delay: 0, duration: 8 },
  { id: 2, color: '#c5e0c5', x: '25%', delay: 1.5, duration: 9 },
  { id: 3, color: '#7a9a79', x: '45%', delay: 3, duration: 8.5 },
  { id: 4, color: '#d4e2d4', x: '62%', delay: 0.5, duration: 9.5 },
  { id: 5, color: '#5a7c59', x: '78%', delay: 2.5, duration: 8.2 },
  { id: 6, color: '#c5e0c5', x: '92%', delay: 4, duration: 8.8 },
]

export function AnimatedBalloons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute"
          style={{ left: balloon.x }}
          initial={{ y: '110vh' }}
          animate={{
            y: '-20vh',
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
            repeatDelay: 2,
          }}
        >
          <motion.svg
            width="100"
            height="160"
            viewBox="0 0 80 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              x: [-18, 18, -18],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Balloon */}
            <ellipse
              cx="40"
              cy="35"
              rx="30"
              ry="40"
              fill={balloon.color}
              opacity="0.9"
            />

            {/* Highlight */}
            <ellipse
              cx="32"
              cy="28"
              rx="11"
              ry="18"
              fill="white"
              opacity="0.4"
            />

            {/* Knot */}
            <path
              d="M 40 75 Q 37 79 40 82"
              stroke={balloon.color}
              strokeWidth="3.5"
              fill="none"
              opacity="0.8"
            />

            {/* String - Made Longer */}
            <motion.path
              d="M 40 82 Q 43 95 40 108 Q 37 121 40 134"
              stroke="#8b7355"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              animate={{
                d: [
                  'M 40 82 Q 43 95 40 108 Q 37 121 40 134',
                  'M 40 82 Q 37 95 40 108 Q 43 121 40 134',
                  'M 40 82 Q 43 95 40 108 Q 37 121 40 134',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.svg>
        </motion.div>
      ))}
    </div>
  )
}
