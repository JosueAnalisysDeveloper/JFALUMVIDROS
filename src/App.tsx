import Hero from './components/Hero'
import Products from './components/Products'
import Partner from './components/Partner'
import Location from './components/Location'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <>
      <Hero />
      <Products />
      <Partner />
      <Location />
      <ContactForm />
      <footer className="bg-black px-6 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} JF Alumvidros · Vidraçaria
      </footer>
    </>
  )
}
