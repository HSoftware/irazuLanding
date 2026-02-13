import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Cierre from "./sections/Cierre"
import Equipo from "./sections/Equipo"
import FAQ from "./sections/FAQ"
import PropuestaValor from "./components/Propuesta/PropuestaValor"
import Testimonios from "./components/Testimonios/Testimonios"


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
