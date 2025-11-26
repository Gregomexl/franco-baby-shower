import { motion } from 'framer-motion'
import { EVENT_CONFIG } from '../../config/eventData'
import { Container } from '../layout/Container'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Footer() {
  return (
    <footer className="py-20 bg-beige relative">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          {/* Decorative Divider */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-300"></div>
            <span className="text-green-500 text-xl">❖</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-green-300"></div>
          </motion.div>

          {/* Decorative Stars */}
          <motion.div
            variants={item}
            className="flex justify-center gap-3 mb-8"
          >
            <span className="text-xl text-green-400 opacity-60">✦</span>
            <span className="text-2xl text-green-500">✦</span>
            <span className="text-xl text-green-400 opacity-60">✦</span>
          </motion.div>

          {/* Main Message */}
          <motion.p
            variants={item}
            className="text-3xl md:text-4xl font-heading text-text-primary mb-8 leading-relaxed"
          >
            ¡Te esperamos con mucho <span className="text-green-500">cariño</span>!
          </motion.p>

          {/* Hearts Decoration */}
          <motion.div
            variants={item}
            className="flex justify-center gap-2 text-2xl mb-8"
          >
            <span className="text-green-400 opacity-60">♥</span>
            <span className="text-green-500">♥</span>
            <span className="text-green-400 opacity-60">♥</span>
          </motion.div>

          {/* Family Name */}
          <motion.p
            variants={item}
            className="text-3xl md:text-4xl text-text-primary font-heading mb-10"
          >
            {EVENT_CONFIG.parents.names}
          </motion.p>

          {/* Bottom Decoration */}
          <motion.div
            variants={item}
            className="flex justify-center gap-3"
          >
            <span className="text-xl text-green-400 opacity-60">✦</span>
            <span className="text-2xl text-green-500">✦</span>
            <span className="text-xl text-green-400 opacity-60">✦</span>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}
