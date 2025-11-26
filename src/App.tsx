import { Hero } from './components/sections/Hero'
import { EventDetails } from './components/sections/EventDetails'
import { ActionButtons } from './components/sections/ActionButtons'
import { Footer } from './components/sections/Footer'
import { Container } from './components/layout/Container'

function App() {
  return (
    <div className="min-h-screen">
      <Container>
        <Hero />
      </Container>
      <EventDetails />
      <ActionButtons />
      <Footer />
    </div>
  )
}

export default App
