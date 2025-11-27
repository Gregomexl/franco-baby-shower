import { motion } from 'framer-motion'

/**
 * Loading component shown during initial page load
 * Provides a smooth, branded loading experience
 */
export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Animated Baby Bottle Icon */}
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-24 h-24 mx-auto"
          >
            <defs>
              <linearGradient id="loadingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7A9B84', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#5a7c59', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Background circle */}
            <circle cx="16" cy="16" r="15" fill="url(#loadingGrad)" />

            {/* Baby bottle icon */}
            <g fill="#ffffff">
              {/* Bottle body */}
              <rect x="12" y="10" width="8" height="14" rx="2" ry="2" />
              {/* Bottle neck */}
              <rect x="13.5" y="8" width="5" height="3" rx="1" ry="1" />
              {/* Bottle nipple */}
              <ellipse cx="16" cy="7" rx="2.5" ry="1.5" />

              {/* Heart decoration on bottle */}
              <path
                d="M 16 17
                   C 16 17, 14.5 15, 13.5 15
                   C 12.5 15, 12 15.5, 12 16.5
                   C 12 17.5, 13 18.5, 16 21
                   C 19 18.5, 20 17.5, 20 16.5
                   C 20 15.5, 19.5 15, 18.5 15
                   C 17.5 15, 16 17, 16 17 Z"
                fill="#E5D4C1"
                opacity="0.9"
              />
            </g>
          </svg>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl md:text-3xl font-script mb-4"
          style={{ color: '#7A9B84' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          Cargando...
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#7A9B84' }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut" as const,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
