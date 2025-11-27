import { motion } from 'framer-motion'
import { Gift, Calendar, Share2 } from 'lucide-react'
import { useState } from 'react'
import { EVENT_CONFIG } from '../../config/eventData'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { Confetti } from '../ui/Confetti'
import { downloadCalendarFile } from '../../utils/calendar'

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

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

  const handleRegistry = () => {
    window.open(EVENT_CONFIG.registry.url, '_blank')
  }

  const handleCalendar = () => {
    downloadCalendarFile()
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

  const handleShare = async () => {
    const shareData = {
      title: `Baby Shower ${EVENT_CONFIG.baby.name}`,
      text: `¡Estás invitado al Baby Shower de ${EVENT_CONFIG.baby.name}! ${EVENT_CONFIG.event.dayOfWeek} ${EVENT_CONFIG.event.displayDate} a las ${EVENT_CONFIG.event.displayTime} en ${EVENT_CONFIG.venue.name}`,
      url: window.location.href,
    }

    try {
      // Check if Web Share API is supported and if we can share
      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else if (navigator.share) {
        // Fallback if canShare is not supported but share is
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`)
        alert('Enlace copiado al portapapeles')
      }
    } catch (err) {
      // User cancelled or error occurred
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <>
      <Confetti trigger={showConfetti} />
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Watercolor Clouds - Darker Outlines */}
        <div className="absolute inset-0 pointer-events-none opacity-45" aria-hidden="true">
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
        <div className="absolute inset-0 pointer-events-none max-w-6xl mx-auto px-8" aria-hidden="true">
          <motion.div
            className="absolute top-20 left-12 text-2xl opacity-60"
            style={{ color: '#7A9B84' }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
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
            animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
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
                onClick={handleCalendar}
                variant="secondary"
                icon={<Calendar className="w-5 h-5" />}
                aria-label="Agregar al calendario"
              >
                Agregar al Calendario
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <Button
                onClick={handleRegistry}
                variant="primary"
                icon={<Gift className="w-5 h-5" />}
                aria-label="Ver mesa de regalos en Amazon"
              >
                Mesa de Regalos
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <Button
                onClick={handleShare}
                variant="secondary"
                icon={<Share2 className="w-5 h-5" />}
                aria-label="Compartir invitación"
              >
                Compartir Invitación
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <Button
                onClick={handleRSVP}
                variant="primary"
                icon={<WhatsAppIcon className="w-5 h-5" />}
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
