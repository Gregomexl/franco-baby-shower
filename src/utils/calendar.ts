import { EVENT_CONFIG } from '../config/eventData'

/**
 * Generates an .ics (iCalendar) file for the baby shower event
 * Following RFC 5545 specification
 */
export function generateCalendarFile() {
  const { event, venue, baby } = EVENT_CONFIG

  // Parse the event date and time
  const eventDate = new Date(`${event.date}T${event.time}:00`)

  // Format date for iCalendar (YYYYMMDDTHHMMSS)
  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}${month}${day}T${hours}${minutes}${seconds}`
  }

  // Event duration: 4 hours
  const endDate = new Date(eventDate.getTime() + 4 * 60 * 60 * 1000)

  // Current timestamp for DTSTAMP
  const now = new Date()

  // Create .ics content
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Baby Shower Franco//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Baby Shower Franco',
    'X-WR-TIMEZONE:America/Monterrey',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(eventDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `DTSTAMP:${formatDate(now)}`,
    `UID:babyshower-franco-${event.date}@francobabyshower.com`,
    `SUMMARY:Baby Shower ${baby.name} 🧸`,
    `DESCRIPTION:¡Celebremos juntos la llegada de ${baby.name}! Un día especial para compartir en familia.`,
    `LOCATION:${venue.name}\\, ${venue.address}\\, ${venue.city}`,
    `URL:${venue.googleMapsUrl}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:Recordatorio: Baby Shower ${baby.name} mañana`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return icsContent
}

/**
 * Downloads the .ics file for the user to add to their calendar
 */
export function downloadCalendarFile() {
  const icsContent = generateCalendarFile()

  // Create blob
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })

  // Create download link
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `baby-shower-franco-${EVENT_CONFIG.event.date}.ics`

  // Trigger download
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Clean up
  URL.revokeObjectURL(link.href)
}
