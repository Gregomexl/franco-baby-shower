import { motion } from 'framer-motion'
import { EVENT_CONFIG } from '../../config/eventData'
import { useCountdown } from '../../hooks/useCountdown'
import { Container } from '../layout/Container'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Countdown() {
  const eventDate = new Date(EVENT_CONFIG.event.date + 'T' + EVENT_CONFIG.event.time)
  const timeLeft = useCountdown(eventDate)

  const timeBlocks = [
    { value: timeLeft.days, label: timeLeft.days === 1 ? 'Día' : 'Días' },
    { value: timeLeft.hours, label: timeLeft.hours === 1 ? 'Hora' : 'Horas' },
    { value: timeLeft.minutes, label: timeLeft.minutes === 1 ? 'Minuto' : 'Minutos' },
    { value: timeLeft.seconds, label: timeLeft.seconds === 1 ? 'Segundo' : 'Segundos' },
  ]

  if (timeLeft.isExpired) {
    return (
      <section className="py-12 md:py-16 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary">
              ¡Hoy es el día! 🎉
            </h2>
          </motion.div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Watercolor Clouds - Darker Outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="absolute top-10 left-10" width="140" height="55" viewBox="0 0 140 55">
          <ellipse cx="35" cy="28" rx="35" ry="24" fill="white" opacity="0.7" filter="url(#countBlur1)" />
          <ellipse cx="70" cy="26" rx="40" ry="26" fill="white" opacity="0.65" filter="url(#countBlur1)" />
          <ellipse cx="105" cy="30" rx="33" ry="22" fill="white" opacity="0.7" filter="url(#countBlur1)" />
          <defs>
            <filter id="countBlur1">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        <svg className="absolute bottom-16 right-16" width="135" height="54" viewBox="0 0 135 54">
          <ellipse cx="34" cy="27" rx="34" ry="23" fill="white" opacity="0.65" filter="url(#countBlur2)" />
          <ellipse cx="67" cy="25" rx="38" ry="25" fill="white" opacity="0.7" filter="url(#countBlur2)" />
          <ellipse cx="101" cy="29" rx="32" ry="21" fill="white" opacity="0.7" filter="url(#countBlur2)" />
          <defs>
            <filter id="countBlur2">
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
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
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
          animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-20 left-12 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute top-16 right-12 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.3 }}
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
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute top-1/2 right-14 text-2xl opacity-60"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-16 right-12 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
        >★</motion.div>
      </div>

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-heading text-center text-text-primary"
          >
            Faltan
          </motion.h2>

          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-500 font-heading tabular-nums">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-text-muted mt-2 uppercase tracking-wider">
                  {block.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
