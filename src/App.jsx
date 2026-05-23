import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Brands from './components/Brands'
import Role from './components/Role'
import Ecosystem from './components/Ecosystem'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080807] text-[#f0ede6] font-body font-light min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Role />
      <Ecosystem />
      <Vision />
      <Contact />
      <Footer />
    </div>
  )
}
