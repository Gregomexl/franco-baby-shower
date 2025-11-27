import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Gift } from 'lucide-react'
import { useState } from 'react'
import { EVENT_CONFIG } from '../../config/eventData'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { Confetti } from '../ui/Confetti'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function ActionButtons() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleLocation = () => {
    window.open(EVENT_CONFIG.venue.googleMapsUrl, '_blank')
  }

  const handleRegistry = () => {
    window.open(EVENT_CONFIG.registry.url, '_blank')
  }

  const handleRSVP = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 500)

    // Delay WhatsApp opening so confetti is visible first
    setTimeout(() => {
      const message = encodeURIComponent(EVENT_CONFIG.rsvp.message)
      const url = `https://wa.me/${EVENT_CONFIG.rsvp.whatsappNumber}?text=${message}`
      window.open(url, '_blank')
    }, 300)
  }

  return (
    <>
      <Confetti trigger={showConfetti} />
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Watercolor Clouds - Darker Outlines */}
        <div className="absolute inset-0 pointer-events-none opacity-45">
          <svg className="absolute top-8 left-8" width="150" height="60" viewBox="0 0 150 60">
            <ellipse cx="38" cy="30" rx="38" ry="26" fill="white" opacity="0.7" filter="url(#actionBlur1)" />
            <ellipse cx="75" cy="28" rx="42" ry="28" fill="white" opacity="0.65" filter="url(#actionBlur1)" />
            <ellipse cx="112" cy="32" rx="36" ry="24" fill="white" opacity="0.7" filter="url(#actionBlur1)" />
            <defs>
              <filter id="actionBlur1">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
          </svg>

          <svg className="absolute bottom-12 right-10" width="145" height="58" viewBox="0 0 145 58">
            <ellipse cx="36" cy="29" rx="36" ry="25" fill="white" opacity="0.65" filter="url(#actionBlur2)" />
            <ellipse cx="72" cy="27" rx="40" ry="27" fill="white" opacity="0.7" filter="url(#actionBlur2)" />
            <ellipse cx="109" cy="31" rx="34" ry="23" fill="white" opacity="0.7" filter="url(#actionBlur2)" />
            <defs>
              <filter id="actionBlur2">
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
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >★</motion.div>
          <motion.div
            className="absolute top-1/4 left-16 text-xl opacity-55"
            style={{ color: '#7A9B84' }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >★</motion.div>
          <motion.div
            className="absolute top-1/3 left-8 text-xl opacity-55"
            style={{ color: '#7A9B84' }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >★</motion.div>
          <motion.div
            className="absolute top-1/2 left-14 text-2xl opacity-60"
            style={{ color: '#7A9B84' }}
            animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >★</motion.div>
          <motion.div
            className="absolute bottom-20 left-12 text-xl opacity-55"
            style={{ color: '#7A9B84' }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >★</motion.div>
          <motion.div
            className="absolute top-16 right-12 text-2xl opacity-60"
            style={{ color: '#E5D4C1' }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >★</motion.div>
          <motion.div
            className="absolute top-1/4 right-16 text-xl opacity-55"
            style={{ color: '#E5D4C1' }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 6, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >★</motion.div>
          <motion.div
            className="absolute top-1/3 right-8 text-xl opacity-55"
            style={{ color: '#E5D4C1' }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >★</motion.div>
          <motion.div
            className="absolute top-1/2 right-14 text-2xl opacity-60"
            style={{ color: '#E5D4C1' }}
            animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
            transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >★</motion.div>
          <motion.div
            className="absolute bottom-16 right-12 text-xl opacity-55"
            style={{ color: '#E5D4C1' }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >★</motion.div>
        </div>

        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <motion.div variants={item}>
              <Button
                onClick={handleLocation}
                variant="secondary"
                icon={<MapPin className="w-5 h-5" />}
                aria-label="Ver ubicación en Google Maps"
              >
                Ver Ubicación
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <Button
                onClick={handleRegistry}
                variant="secondary"
                icon={<Gift className="w-5 h-5" />}
                aria-label="Ver mesa de regalos en Amazon"
              >
                Mesa de Regalos
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <Button
                onClick={handleRSVP}
                variant="primary"
                icon={<MessageCircle className="w-5 h-5" />}
                aria-label="Confirmar asistencia por WhatsApp"
              >
                Confirmar Asistencia
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
