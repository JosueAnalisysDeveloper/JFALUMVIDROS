import Hero from './components/Hero'
import VideoZone from './components/VideoZone'
import About from './components/About'
import WhyUs from './components/WhyUs'
import HorizontalGallery from './components/HorizontalGallery'
import ExpandPanels from './components/ExpandPanels'
import Partner from './components/Partner'
import Faq from './components/Faq'
import Location from './components/Location'
import ContactForm from './components/ContactForm'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
      <VideoZone>
        <Hero />
        <About />
        <WhyUs />
      </VideoZone>
      <HorizontalGallery />
      <ExpandPanels />
      <Partner />
      <Faq />
      <Location />
      <ContactForm />
      <footer className="bg-black px-6 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} JF Alumvidros · Vidraçaria
      </footer>
    </>
  )
}
