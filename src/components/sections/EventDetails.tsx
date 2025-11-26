import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'
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
    <section className="py-12 md:py-16 bg-beige relative z-10">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <motion.div variants={item} className="text-center space-y-3">
              <Calendar className="w-8 h-8 mx-auto text-green-500" />
              <p className="text-text-muted text-sm uppercase tracking-wider">
                {EVENT_CONFIG.event.dayOfWeek}
              </p>
              <p className="text-2xl font-heading font-semibold text-text-primary">
                {EVENT_CONFIG.event.displayDate}
              </p>
            </motion.div>

            <motion.div variants={item} className="text-center space-y-3">
              <Clock className="w-8 h-8 mx-auto text-green-500" />
              <p className="text-text-muted text-sm uppercase tracking-wider">
                A las
              </p>
              <p className="text-2xl font-heading font-semibold text-text-primary">
                {EVENT_CONFIG.event.displayTime}
              </p>
            </motion.div>
          </div>

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
