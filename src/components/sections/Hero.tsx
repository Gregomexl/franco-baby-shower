import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Watercolor Clouds - Darker Outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        {/* Cloud 1 - Top Left */}
        <svg className="absolute top-16 left-8" width="200" height="80" viewBox="0 0 200 80">
          <ellipse cx="50" cy="40" rx="50" ry="35" fill="white" opacity="0.7" filter="url(#blur)" />
          <ellipse cx="100" cy="35" rx="45" ry="30" fill="white" opacity="0.65" filter="url(#blur)" />
          <ellipse cx="150" cy="42" rx="40" ry="28" fill="white" opacity="0.7" filter="url(#blur)" />
          <defs>
            <filter id="blur">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        {/* Cloud 2 - Top Right */}
        <svg className="absolute top-24 right-12" width="180" height="70" viewBox="0 0 180 70">
          <ellipse cx="45" cy="35" rx="45" ry="30" fill="white" opacity="0.7" filter="url(#blur2)" />
          <ellipse cx="90" cy="32" rx="50" ry="32" fill="white" opacity="0.65" filter="url(#blur2)" />
          <ellipse cx="135" cy="38" rx="42" ry="28" fill="white" opacity="0.7" filter="url(#blur2)" />
          <defs>
            <filter id="blur2">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        {/* Cloud 3 - Middle Left */}
        <svg className="absolute top-1/3 left-4" width="160" height="65" viewBox="0 0 160 65">
          <ellipse cx="40" cy="32" rx="40" ry="28" fill="white" opacity="0.65" filter="url(#blur3)" />
          <ellipse cx="80" cy="30" rx="45" ry="30" fill="white" opacity="0.7" filter="url(#blur3)" />
          <ellipse cx="120" cy="35" rx="38" ry="26" fill="white" opacity="0.7" filter="url(#blur3)" />
          <defs>
            <filter id="blur3">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        {/* Cloud 4 - Bottom Left */}
        <svg className="absolute bottom-32 left-16" width="190" height="75" viewBox="0 0 190 75">
          <ellipse cx="48" cy="38" rx="48" ry="32" fill="white" opacity="0.7" filter="url(#blur4)" />
          <ellipse cx="95" cy="35" rx="50" ry="33" fill="white" opacity="0.7" filter="url(#blur4)" />
          <ellipse cx="142" cy="40" rx="45" ry="30" fill="white" opacity="0.65" filter="url(#blur4)" />
          <defs>
            <filter id="blur4">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        {/* Cloud 5 - Bottom Right */}
        <svg className="absolute bottom-24 right-20" width="170" height="68" viewBox="0 0 170 68">
          <ellipse cx="42" cy="34" rx="42" ry="29" fill="white" opacity="0.7" filter="url(#blur5)" />
          <ellipse cx="85" cy="32" rx="48" ry="31" fill="white" opacity="0.7" filter="url(#blur5)" />
          <ellipse cx="128" cy="36" rx="40" ry="27" fill="white" opacity="0.65" filter="url(#blur5)" />
          <defs>
            <filter id="blur5">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Scattered Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Sage Green Stars - Left Side */}
        <motion.div
          className="absolute top-24 left-20 text-2xl opacity-60"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
        >★</motion.div>
        <motion.div
          className="absolute top-40 left-24 text-xl opacity-50"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/3 left-16 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 left-20 text-2xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-1/3 left-24 text-2xl opacity-60"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-32 left-16 text-xl opacity-50"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" as const, delay: 1.3 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-24 left-16 text-xl opacity-50"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 }}
        >★</motion.div>

        {/* Peach/Beige Stars - Right Side */}
        <motion.div
          className="absolute top-20 right-20 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
        >★</motion.div>
        <motion.div
          className="absolute top-36 right-24 text-xl opacity-50"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/3 right-16 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 right-20 text-2xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-1/3 right-24 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-28 right-16 text-xl opacity-50"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut" as const, delay: 1.6 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-20 right-16 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.8 }}
        >★</motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        {/* Decorative Stars Top */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 mb-12"
          aria-hidden="true"
        >
          <motion.span
            className="text-2xl text-green-400 opacity-60"
            animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          >✦</motion.span>
          <motion.span
            className="text-3xl text-green-500"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
          >✦</motion.span>
          <motion.span
            className="text-2xl text-green-400 opacity-60"
            animate={{ rotate: [0, -10, 0], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          >✦</motion.span>
        </motion.div>

        {/* Teddy Bear with Balloons */}
        <motion.div
          variants={item}
          className="mb-8 w-full max-w-lg mx-auto"
        >
          <motion.img
            src="/images/baby_franco.png"
            alt="Teddy Bear with Balloons"
            className="w-full h-auto drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
          />
        </motion.div>

        {/* Invitation Text */}
        <motion.p
          variants={item}
          className="body-large italic mb-4"
          style={{
            color: '#D4A872',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          Acompáñanos a celebrar
        </motion.p>

        {/* Baby Shower Title */}
        <motion.h2
          variants={item}
          className="display-title mb-6"
          style={{ color: '#7A9B84' }}
        >
          BABY SHOWER
        </motion.h2>

        {/* Baby Name - Franco */}
        <motion.h1
          variants={item}
          className="display-hero mb-8"
          style={{ color: '#8B6F47' }}
        >
          Franco
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 my-8"
          aria-hidden="true"
        >
          <motion.div
            className="h-px w-20 bg-gradient-to-r from-transparent to-green-300"
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          ></motion.div>
          <motion.span
            className="text-green-500 text-2xl"
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
          >❖</motion.span>
          <motion.div
            className="h-px w-20 bg-gradient-to-l from-transparent to-green-300"
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          ></motion.div>
        </motion.div>

        {/* Main Message */}
        <motion.div variants={item} className="space-y-2 mb-10 max-w-2xl mx-auto">
          <p className="body-large text-text-primary">
            Un nuevo sol está por iluminar nuestro hogar
          </p>
          <p className="body-large text-text-secondary italic">
            llenándolo de amor y felicidad.
          </p>
        </motion.div>

        {/* Decorative Stars Bottom */}
        <motion.div
          variants={item}
          className="flex justify-center gap-3 mt-10"
          aria-hidden="true"
        >
          <motion.span
            className="text-xl text-green-400 opacity-60"
            animate={{ opacity: [0.4, 0.8, 0.4], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
          >✦</motion.span>
          <motion.span
            className="text-2xl text-green-500"
            animate={{ opacity: [0.6, 1, 0.6], rotate: [0, -180, -360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" as const }}
          >✦</motion.span>
          <motion.span
            className="text-xl text-green-400 opacity-60"
            animate={{ opacity: [0.4, 0.8, 0.4], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
          >✦</motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
