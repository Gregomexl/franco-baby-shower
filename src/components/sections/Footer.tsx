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
    <footer className="py-24 relative overflow-hidden">
      {/* Watercolor Clouds - Darker Outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-55">
        <svg className="absolute top-12 left-8" width="180" height="70" viewBox="0 0 180 70">
          <ellipse cx="45" cy="35" rx="45" ry="30" fill="white" opacity="0.7" filter="url(#footerBlur1)" />
          <ellipse cx="90" cy="32" rx="48" ry="32" fill="white" opacity="0.65" filter="url(#footerBlur1)" />
          <ellipse cx="135" cy="38" rx="42" ry="28" fill="white" opacity="0.7" filter="url(#footerBlur1)" />
          <defs>
            <filter id="footerBlur1">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        <svg className="absolute bottom-16 right-12" width="160" height="65" viewBox="0 0 160 65">
          <ellipse cx="40" cy="32" rx="40" ry="28" fill="white" opacity="0.65" filter="url(#footerBlur2)" />
          <ellipse cx="80" cy="30" rx="45" ry="30" fill="white" opacity="0.7" filter="url(#footerBlur2)" />
          <ellipse cx="120" cy="35" rx="38" ry="26" fill="white" opacity="0.7" filter="url(#footerBlur2)" />
          <defs>
            <filter id="footerBlur2">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        <svg className="absolute top-1/3 right-20" width="155" height="62" viewBox="0 0 155 62">
          <ellipse cx="39" cy="31" rx="39" ry="27" fill="white" opacity="0.65" filter="url(#footerBlur3)" />
          <ellipse cx="77" cy="29" rx="43" ry="29" fill="white" opacity="0.7" filter="url(#footerBlur3)" />
          <ellipse cx="116" cy="33" rx="37" ry="25" fill="white" opacity="0.7" filter="url(#footerBlur3)" />
          <defs>
            <filter id="footerBlur3">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Scattered Stars */}
      <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto px-8">
        <motion.div
          className="absolute top-24 left-12 text-2xl opacity-60"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/3 left-16 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 left-8 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-1/3 left-14 text-2xl opacity-60"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-24 left-12 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute top-20 right-12 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/3 right-16 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 right-8 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-1/3 right-14 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-20 right-12 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
        >★</motion.div>
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
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
            ></motion.div>
            <motion.span
              className="text-green-500 text-2xl"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
            >❖</motion.span>
            <motion.div
              className="h-px w-24 bg-gradient-to-l from-transparent via-green-400/60 to-green-300"
              animate={{ scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
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
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
            >✦</motion.span>
            <motion.span
              className="text-3xl text-green-500 drop-shadow-lg"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            >✦</motion.span>
            <motion.span
              className="text-xl text-green-400 opacity-60"
              animate={{ y: [2, -2, 2], rotate: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
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
              className="text-3xl opacity-70"
              style={{ color: '#8FAA92' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: 0 }}
            >♥</motion.span>
            <motion.span
              className="text-4xl drop-shadow-md"
              style={{ color: '#7A9B84' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
            >♥</motion.span>
            <motion.span
              className="text-3xl opacity-70"
              style={{ color: '#8FAA92' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 }}
            >♥</motion.span>
          </motion.div>

          {/* Family Image */}
          <motion.div
            variants={item}
            className="mb-8"
          >
            <img
              src="/images/family.png"
              alt="Familia Gomez de la Cruz"
              className="w-48 h-auto mx-auto drop-shadow-lg"
            />
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
      </Container>
    </footer>
  )
}
