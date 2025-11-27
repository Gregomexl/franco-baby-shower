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
    googleMapsUrl: import.meta.env['VITE_GOOGLE_MAPS_URL'] as string,
  },
  rsvp: {
    whatsappNumber: import.meta.env['VITE_WHATSAPP_NUMBER'] as string,
    message: "¡Hola! Confirmo mi asistencia al Baby Shower de Franco 🧸",
  },
  parents: {
    names: "Familia Gómez de la Cruz",
  },
  registry: {
    url: import.meta.env['VITE_REGISTRY_URL'] as string,
    platform: "Amazon",
  },
  photoGallery: {
    googlePhotosAlbumUrl: import.meta.env['VITE_PHOTO_ALBUM_URL'] as string,
    enabled: true,
  },
} as const;
