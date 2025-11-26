# Baby Shower Franco 🧸

Digital invitation for Franco's Baby Shower celebration.

## Event Details

- **Date:** January 18, 2026
- **Time:** 11:00 AM
- **Location:** Edificio Aluna, Monterrey, N.L.

## Features

- 🎨 Animated teddy bear with balloons
- ⏱️ Live countdown timer
- 🎉 Confetti effect on RSVP
- 📍 Google Maps integration
- 🎁 Amazon baby registry link
- 📱 WhatsApp RSVP functionality
- 🌐 SEO optimized with structured data
- 📊 Responsive design (mobile-first)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion 12
- **Icons:** Lucide React

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy with one click

### Netlify

1. Connect your GitHub repository to Netlify
2. Build settings are configured in `netlify.toml`
3. Deploy with one click

### Manual Deployment

```bash
npm run build
# Upload contents of 'dist' folder to your hosting provider
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── EventDetails.tsx
│   │   ├── Countdown.tsx
│   │   ├── ActionButtons.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── TeddyBear.tsx
│       ├── AnimatedBalloons.tsx
│       ├── Confetti.tsx
│       └── Button.tsx
├── config/
│   └── eventData.ts
├── hooks/
│   └── useCountdown.ts
├── styles/
│   └── globals.css
└── main.tsx
```

## Configuration

Event details can be updated in `src/config/eventData.ts`:

```typescript
export const EVENT_CONFIG = {
  baby: { name: "Franco" },
  event: {
    date: "2026-01-18",
    time: "11:00",
    // ...
  },
  venue: { /* ... */ },
  rsvp: { /* ... */ },
  registry: { /* ... */ }
}
```

## SEO & Social Sharing

- Optimized meta tags for social media
- Open Graph images (1200x630)
- Twitter Card support
- JSON-LD structured data
- Robots.txt and sitemap.xml included

## License

Private project - All rights reserved
