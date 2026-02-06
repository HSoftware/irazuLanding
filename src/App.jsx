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
        <div className="introSection">
            <div className="introContent">
              <Enganche />
              <Respaldo />
            </div>
          <Formulario />
        </div>
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
