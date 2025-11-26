import { motion } from 'framer-motion'
import { EVENT_CONFIG } from '../../config/eventData'
import { TeddyBear } from '../ui/TeddyBear'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    }
  }
}

export function Hero() {
  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center justify-center py-12 px-4 relative z-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center space-y-6 md:space-y-8 max-w-lg mx-auto"
      >
        <motion.div variants={item} className="w-80 h-96 mx-auto">
          <TeddyBear />
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
          className="text-6xl md:text-7xl lg:text-8xl font-script text-green-500 py-6 md:py-8 leading-tight"
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
