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
      <section className="py-12 md:py-16 relative z-10">
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
    <section className="py-12 md:py-16 relative z-10">
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
