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

const float = {
  y: [-3, 3, -3],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export function Footer() {
  return (
    <footer className="py-24 bg-gradient-to-b from-beige to-green-50/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/10 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto relative"
        >
          {/* Decorative Top Border */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <motion.div
              className="h-px w-24 bg-gradient-to-r from-transparent via-green-400/60 to-green-300"
              animate={{ scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.span
              className="text-green-500 text-2xl"
              animate={float}
            >❖</motion.span>
            <motion.div
              className="h-px w-24 bg-gradient-to-l from-transparent via-green-400/60 to-green-300"
              animate={{ scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>

          {/* Floating Stars */}
          <motion.div
            variants={item}
            className="flex justify-center gap-4 mb-10"
          >
            <motion.span
              className="text-xl text-green-400 opacity-60"
              animate={{ y: [-2, 2, -2], rotate: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >✦</motion.span>
            <motion.span
              className="text-3xl text-green-500 drop-shadow-lg"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >✦</motion.span>
            <motion.span
              className="text-xl text-green-400 opacity-60"
              animate={{ y: [2, -2, 2], rotate: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >✦</motion.span>
          </motion.div>

          {/* Main Message with Enhanced Styling */}
          <motion.div
            variants={item}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-100/20 to-green-100/0 rounded-2xl blur-xl"></div>
            <p className="relative text-3xl md:text-4xl font-heading text-text-primary leading-relaxed px-6 py-4">
              ¡Te esperamos con mucho <span className="text-green-500">cariño</span>!
            </p>
          </motion.div>

          {/* Animated Hearts Decoration */}
          <motion.div
            variants={item}
            className="flex justify-center gap-3 mb-10"
          >
            <motion.span
              className="text-3xl text-green-400 opacity-70"
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >♥</motion.span>
            <motion.span
              className="text-4xl text-green-500 drop-shadow-md"
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >♥</motion.span>
            <motion.span
              className="text-3xl text-green-400 opacity-70"
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >♥</motion.span>
          </motion.div>

          {/* Family Name with Elegant Frame */}
          <motion.div
            variants={item}
            className="relative mb-12"
          >
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-green-400/40 rounded-tl-lg"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-r-2 border-t-2 border-green-400/40 rounded-tr-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l-2 border-b-2 border-green-400/40 rounded-bl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-green-400/40 rounded-br-lg"></div>

            <div className="py-8 px-12">
              <p className="text-3xl md:text-4xl text-text-primary font-heading tracking-wide">
                {EVENT_CONFIG.parents.names}
              </p>
            </div>
          </motion.div>

          {/* Bottom Decorative Stars */}
          <motion.div
            variants={item}
            className="flex justify-center gap-4"
          >
            <motion.span
              className="text-xl text-green-400 opacity-60"
              animate={{ opacity: [0.4, 0.8, 0.4], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >✦</motion.span>
            <motion.span
              className="text-2xl text-green-500"
              animate={{ opacity: [0.6, 1, 0.6], rotate: [0, -180, -360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >✦</motion.span>
            <motion.span
              className="text-xl text-green-400 opacity-60"
              animate={{ opacity: [0.4, 0.8, 0.4], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >✦</motion.span>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}
