import Footer from "./components/Footer"
import Header from "./components/Header"
import Cierre from "./sections/Cierre"
import Enganche from "./sections/Enganche"
import Equipo from "./sections/Equipo"
import FAQ from "./sections/FAQ"
import Formulario from "./sections/Formulario"
import PropuestaValor from "./sections/PropuestaValor"
import Respaldo from "./sections/Respaldo"
import Testimonios from "./sections/Testimonios"


function App() {

  return (
    <>
      <Header />
      <Enganche />
      <Formulario />
      <Respaldo />
      <hr />
      <PropuestaValor />
      <hr />
      <Testimonios />
      <hr />
      <Equipo />
      <hr />
      <FAQ />
      <hr />
      <Cierre /> 
      <hr />
      <Footer />
    </>
  )
}

export default App
