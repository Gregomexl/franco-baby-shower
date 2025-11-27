import { motion } from 'framer-motion'
import { EVENT_CONFIG } from '../../config/eventData'
import { Container } from '../layout/Container'

// SVG Heart Icon Component
const HeartIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

// SVG Paw Print Icon Component
const PawIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="8.5" cy="5" rx="2.5" ry="3"/>
    <ellipse cx="15.5" cy="5" rx="2.5" ry="3"/>
    <ellipse cx="5" cy="10" rx="2" ry="2.5"/>
    <ellipse cx="19" cy="10" rx="2" ry="2.5"/>
    <path d="M12 21c-2.5 0-4.5-2-5-4.5-.3-1.5.5-3 2-3.5 1-.3 2-.5 3-.5s2 .2 3 .5c1.5.5 2.3 2 2 3.5-.5 2.5-2.5 4.5-5 4.5z"/>
  </svg>
)

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
      <div className="absolute inset-0 pointer-events-none opacity-55" aria-hidden="true">
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
      <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto px-8" aria-hidden="true">
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
            className="relative mb-10 max-w-2xl mx-auto"
          >
            {/* Decorative line above */}
            <div className="h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-green-400/50 to-transparent mb-6"></div>

            {/* Message container with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-100/30 to-green-100/0 rounded-3xl blur-2xl"></div>
              <motion.p
                className="relative display-hero px-8 py-6"
                style={{ color: '#7A9B84' }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
              >
                ¡Te esperamos!
              </motion.p>
            </div>

            {/* Decorative line below */}
            <div className="h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-green-400/50 to-transparent mt-6"></div>
          </motion.div>

          {/* Animated Hearts Decoration */}
          <motion.div
            variants={item}
            className="flex justify-center gap-3 mb-10"
          >
            <motion.div
              className="w-8 h-8 opacity-70"
              style={{ color: '#8FAA92' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: 0 }}
            >
              <HeartIcon style={{ color: '#8FAA92' }} />
            </motion.div>
            <motion.div
              className="w-10 h-10 drop-shadow-md"
              style={{ color: '#7A9B84' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
            >
              <HeartIcon style={{ color: '#7A9B84' }} />
            </motion.div>
            <motion.div
              className="w-8 h-8 opacity-70"
              style={{ color: '#8FAA92' }}
              animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 }}
            >
              <HeartIcon style={{ color: '#8FAA92' }} />
            </motion.div>
          </motion.div>

          {/* Family Image */}
          <motion.div
            variants={item}
            className="mb-8"
          >
            <img
              src="/images/family.png"
              alt="Familia Gómez de la Cruz"
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

            {/* Dog Paw Prints */}
            <motion.div
              className="absolute -top-10 left-1/4 w-10 h-10 opacity-65"
              animate={{ rotate: [0, -10, 0], y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 0 }}
            >
              <PawIcon style={{ color: '#8FAA92' }} />
            </motion.div>
            <motion.div
              className="absolute -top-6 right-1/3 w-8 h-8 opacity-55"
              animate={{ rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
            >
              <PawIcon style={{ color: '#7A9B84' }} />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 right-1/4 w-10 h-10 opacity-60"
              animate={{ rotate: [0, 10, 0], y: [0, 2, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
            >
              <PawIcon style={{ color: '#8FAA92' }} />
            </motion.div>
            <motion.div
              className="absolute -bottom-7 left-1/3 w-8 h-8 opacity-50"
              animate={{ rotate: [0, -12, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
            >
              <PawIcon style={{ color: '#7A9B84' }} />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-12 w-8 h-8 opacity-55"
              style={{ transform: 'translateY(-50%) rotate(-35deg)' }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
            >
              <PawIcon style={{ color: '#8FAA92' }} />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-10 w-8 h-8 opacity-50"
              style={{ transform: 'translateY(-50%) rotate(35deg)' }}
              animate={{ scale: [1, 1.1, 1], rotate: [35, 45, 35] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
            >
              <PawIcon style={{ color: '#7A9B84' }} />
            </motion.div>

            <div className="py-8 px-12">
              <p className="heading-2 font-light text-text-primary">
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
