import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
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
      <section className="py-12 md:py-16 bg-cream">
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
