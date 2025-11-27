import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
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

export function EventDetails() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Watercolor Clouds - Darker Outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="absolute top-8 right-12" width="150" height="60" viewBox="0 0 150 60">
          <ellipse cx="38" cy="30" rx="38" ry="26" fill="white" opacity="0.7" filter="url(#eventBlur1)" />
          <ellipse cx="75" cy="28" rx="42" ry="28" fill="white" opacity="0.65" filter="url(#eventBlur1)" />
          <ellipse cx="112" cy="32" rx="36" ry="24" fill="white" opacity="0.7" filter="url(#eventBlur1)" />
          <defs>
            <filter id="eventBlur1">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        <svg className="absolute bottom-12 left-8" width="140" height="55" viewBox="0 0 140 55">
          <ellipse cx="35" cy="28" rx="35" ry="24" fill="white" opacity="0.65" filter="url(#eventBlur2)" />
          <ellipse cx="70" cy="26" rx="40" ry="26" fill="white" opacity="0.7" filter="url(#eventBlur2)" />
          <ellipse cx="105" cy="30" rx="33" ry="22" fill="white" opacity="0.7" filter="url(#eventBlur2)" />
          <defs>
            <filter id="eventBlur2">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        <svg className="absolute top-1/2 left-16" width="130" height="52" viewBox="0 0 130 52">
          <ellipse cx="32" cy="26" rx="32" ry="22" fill="white" opacity="0.65" filter="url(#eventBlur3)" />
          <ellipse cx="65" cy="24" rx="38" ry="24" fill="white" opacity="0.7" filter="url(#eventBlur3)" />
          <ellipse cx="98" cy="28" rx="30" ry="20" fill="white" opacity="0.7" filter="url(#eventBlur3)" />
          <defs>
            <filter id="eventBlur3">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto px-8">
        <motion.div
          className="absolute top-20 left-12 text-2xl opacity-60"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/4 left-16 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/3 left-8 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 left-14 text-2xl opacity-60"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-20 left-12 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute top-16 right-12 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/4 right-16 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.6 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/3 right-8 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 right-14 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-16 right-12 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
        >★</motion.div>
      </div>

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Date and Time - Elegant Layout */}
          <motion.div variants={item} className="text-center space-y-6 max-w-2xl mx-auto">
            {/* Month */}
            <p className="text-3xl md:text-4xl font-serif text-text-secondary tracking-wider">
              Enero
            </p>

            {/* Main Date Line */}
            <div className="space-y-4">
              {/* Top decorative line */}
              <div className="h-px w-full max-w-md mx-auto bg-text-muted/40"></div>

              <div className="flex items-center justify-center gap-4 text-text-primary">
                <p className="text-2xl md:text-3xl font-serif tracking-wide">
                  {EVENT_CONFIG.event.dayOfWeek}
                </p>
                <p className="text-6xl md:text-7xl font-serif font-bold">
                  18
                </p>
                <p className="text-2xl md:text-3xl font-serif tracking-wide">
                  {EVENT_CONFIG.event.displayTime}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="h-px w-full max-w-md mx-auto bg-text-muted/40"></div>
            </div>

            {/* Year */}
            <p className="text-3xl md:text-4xl font-serif text-text-secondary tracking-wider">
              2026
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"
          />

          {/* Venue */}
          <motion.div variants={item} className="text-center space-y-4">
            <MapPin className="w-10 h-10 mx-auto text-green-500" />
            <h3 className="text-2xl font-heading font-semibold text-text-primary">
              {EVENT_CONFIG.venue.name}
            </h3>
            <p className="text-text-secondary">
              {EVENT_CONFIG.venue.address}
            </p>
            <p className="text-text-secondary">
              {EVENT_CONFIG.venue.city}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
