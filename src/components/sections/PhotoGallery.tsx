import { motion } from 'framer-motion'
import { Camera, Upload, Image as ImageIcon } from 'lucide-react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { EVENT_CONFIG } from '../../config/eventData'

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

export function PhotoGallery() {
  const handleUploadPhotos = () => {
    window.open(EVENT_CONFIG.photoGallery.googlePhotosAlbumUrl, '_blank')
  }

  const handleViewGallery = () => {
    window.open(EVENT_CONFIG.photoGallery.googlePhotosAlbumUrl, '_blank')
  }

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Watercolor Clouds */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="absolute top-10 right-12" width="150" height="60" viewBox="0 0 150 60">
          <ellipse cx="38" cy="30" rx="38" ry="26" fill="white" opacity="0.7" filter="url(#photoBlur1)" />
          <ellipse cx="75" cy="28" rx="42" ry="28" fill="white" opacity="0.65" filter="url(#photoBlur1)" />
          <ellipse cx="112" cy="32" rx="36" ry="24" fill="white" opacity="0.7" filter="url(#photoBlur1)" />
          <defs>
            <filter id="photoBlur1">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
        </svg>

        <svg className="absolute bottom-16 left-10" width="140" height="55" viewBox="0 0 140 55">
          <ellipse cx="35" cy="28" rx="35" ry="24" fill="white" opacity="0.65" filter="url(#photoBlur2)" />
          <ellipse cx="70" cy="26" rx="40" ry="26" fill="white" opacity="0.7" filter="url(#photoBlur2)" />
          <ellipse cx="105" cy="30" rx="33" ry="22" fill="white" opacity="0.7" filter="url(#photoBlur2)" />
          <defs>
            <filter id="photoBlur2">
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
          className="absolute top-1/3 left-8 text-xl opacity-55"
          style={{ color: '#7A9B84' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
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
          className="absolute top-1/3 right-8 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }}
        >★</motion.div>
        <motion.div
          className="absolute bottom-16 right-12 text-xl opacity-55"
          style={{ color: '#E5D4C1' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
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
          {/* Section Title */}
          <motion.div variants={item} className="text-center space-y-4">
            <div className="flex justify-center items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
              >
                <Camera className="w-12 h-12 text-green-500" />
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-text-primary">
             ¡Comparte tus Fotos!
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"
          />

          {/* Photo Grid Preview - Placeholder */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="aspect-square bg-gradient-to-br from-green-100/30 to-green-50/30 rounded-2xl backdrop-blur-sm border border-green-200/30 flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={handleViewGallery}
              >
                <ImageIcon className="w-12 h-12 text-green-300 group-hover:text-green-500 transition-colors" />
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleUploadPhotos}
              variant="primary"
              icon={<Upload className="w-5 h-5" />}
              aria-label="Subir fotos al álbum"
            >
              Subir Fotos
            </Button>

            <Button
              onClick={handleViewGallery}
              variant="secondary"
              icon={<ImageIcon className="w-5 h-5" />}
              aria-label="Ver galería completa"
            >
              Ver Galería Completa
            </Button>
          </motion.div>

          {/* Info Text */}
          <motion.div variants={item} className="text-center">
            <p className="text-sm text-text-muted">
              Las fotos se guardan en un álbum compartido de Google Photos
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
