import Footer from "./components/Footer"
import Header from "./components/Header"
import Cierre from "./sections/Cierre"
import Equipo from "./sections/Equipo"
import FAQ from "./sections/FAQ"
import PropuestaValor from "./sections/PropuestaValor"
import Testimonios from "./sections/Testimonios"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <PropuestaValor />
      <Testimonios />
      <Equipo />
      <FAQ />
      <Cierre /> 
      <Footer />
    </>
  )
}

export default App
