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
    <section className="min-h-screen flex items-center justify-center py-16 px-4 relative z-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-2xl mx-auto"
      >
        {/* Decorative Stars Top */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 mb-8"
        >
          <span className="text-2xl text-green-400 opacity-60">✦</span>
          <span className="text-3xl text-green-500">✦</span>
          <span className="text-2xl text-green-400 opacity-60">✦</span>
        </motion.div>

        <motion.div variants={item} className="w-80 h-96 mx-auto mb-12">
          <TeddyBear />
        </motion.div>

        {/* Main Message */}
        <motion.div variants={item} className="space-y-6 mb-10">
          <p className="text-2xl md:text-3xl text-text-primary font-light leading-relaxed">
            Un nuevo <span className="text-green-500 font-medium">sol</span> está por iluminar nuestro hogar,
          </p>
          <p className="text-xl md:text-2xl text-text-secondary font-light italic">
            llenándolo de amor y felicidad.
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 my-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-300"></div>
          <span className="text-green-500 text-2xl">❖</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300"></div>
        </motion.div>

        {/* Invitation */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-text-primary font-light mb-8"
        >
          Celebra con nosotros la llegada de nuestro pequeño
        </motion.p>

        {/* Baby Name */}
        <motion.h1
          variants={item}
          className="text-7xl md:text-8xl lg:text-9xl font-script text-green-500 py-4 leading-tight"
        >
          {EVENT_CONFIG.baby.name}
        </motion.h1>

        {/* Decorative Stars Bottom */}
        <motion.div
          variants={item}
          className="flex justify-center gap-3 mt-10"
        >
          <span className="text-xl text-green-400 opacity-60">✦</span>
          <span className="text-2xl text-green-500">✦</span>
          <span className="text-xl text-green-400 opacity-60">✦</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
