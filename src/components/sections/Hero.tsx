import { motion } from 'framer-motion'
import { EVENT_CONFIG } from '../../config/eventData'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center space-y-6"
      >
        <motion.div variants={item} className="w-48 h-48 mx-auto">
          {/* Teddy Bear SVG will go here in Phase 3 */}
          <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center text-6xl">
            🧸
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="text-text-secondary text-lg font-light"
        >
          Nos gustaría compartir contigo
        </motion.p>

        <motion.p
          variants={item}
          className="text-text-secondary text-lg font-light"
        >
          este día tan especial:
        </motion.p>

        <motion.p
          variants={item}
          className="text-text-primary text-xl font-medium mt-8"
        >
          La llegada a nuestra vida de
        </motion.p>

        <motion.p
          variants={item}
          className="text-text-primary text-xl font-medium"
        >
          nuestro pequeño hijo
        </motion.p>

        <motion.h1
          variants={item}
          className="text-7xl md:text-8xl font-script text-green-500 py-8"
        >
          {EVENT_CONFIG.baby.name}
        </motion.h1>

        <motion.div variants={item} className="text-4xl">
          ✨
        </motion.div>
      </motion.div>
    </section>
  )
}
