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
    <footer className="py-16 bg-beige">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.p
            variants={item}
            className="text-2xl font-heading text-text-primary"
          >
            ¡Te esperamos con mucho cariño!
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-text-secondary font-medium"
          >
            {EVENT_CONFIG.parents.names}
          </motion.p>

          <motion.div
            variants={item}
            className="flex justify-center gap-4 text-3xl pt-4"
          >
            <span>🐾</span>
            <span>🐾</span>
            <span>🐾</span>
            <span>🐾</span>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}
