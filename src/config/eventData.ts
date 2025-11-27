/**
 * Event configuration
 * Environment variables are loaded from .env file (Vite requires VITE_ prefix)
 * Fallback values are provided for development
 */
export const EVENT_CONFIG = {
  baby: {
    name: "Franco",
  },
  event: {
    date: "2026-01-18",
    time: "11:00",
    displayDate: "18 de Enero",
    displayTime: "11:00 A.M.",
    dayOfWeek: "Domingo",
  },
  venue: {
    name: "Edificio Aluna",
    address: "Jerónimo Treviño 1702, Centro",
    city: "64000 Monterrey, N.L.",
    googleMapsUrl: import.meta.env['VITE_GOOGLE_MAPS_URL'] || "https://maps.app.goo.gl/igHZ5XnGup4XmTUo9",
  },
  rsvp: {
    whatsappNumber: import.meta.env['VITE_WHATSAPP_NUMBER'] || "525639422226",
    message: "¡Hola! Confirmo mi asistencia al Baby Shower de Franco 🧸",
  },
  parents: {
    names: "Familia Gómez de la Cruz",
  },
  registry: {
    url: import.meta.env['VITE_REGISTRY_URL'] || "https://www.amazon.com.mx/baby-reg/gregoryonasisgomez-blas-febrero-2026-monterrey/3G9RQZC10WBP6",
    platform: "Amazon",
  },
  photoGallery: {
    googlePhotosAlbumUrl: import.meta.env['VITE_PHOTO_ALBUM_URL'] || "https://photos.app.goo.gl/GHMjT5LBesqdyrfX9",
    enabled: true,
  },
} as const;
