import yrazu from "../../assets/images/Yrazu02.png" 
import "./Propuesta.css"

export default function PropuestaValor() {
return (
  <section className="propuesta-valor">
      <h2 className="tituloPropuesta">Te guiará alguien que ya recorrió este camino</h2>

        <div className="emparejados">
            <div className="FotoYrazu">
                <img src={yrazu} alt="Foto Yrazú Carmona" />
            </div>

          <div className="sobre-yrazu">
            <h2 className="protagonista">Yrazú Carmona</h2>
            <p className="text-center">
                Mamá, esposa y líder con propósito
            </p>
            <p className="py-3">
                Como inmigrante, construí mi carrera liderando equipos latinos en la industria 
                financiera; hoy estos equipos crecen con un propósito, objetivos claros y comunidad. 
                Te acompaño con mentoría real, práctica y constante, porque aquí no caminas solo. 
            </p>
              <ul className="listaPropuesta">
                <li className="itemListaPropuesta">
                    <span className="iconoDorado">&#10003;</span> <span>Agente certificada</span>
                </li>
                <li className="itemListaPropuesta">
                    <span className="iconoDorado">&#10003;</span> <span>Ingresos e historias reales</span>
                </li>
              </ul>
              <p>
                  Tranformo vidas y mi misión es, ayudarte a que tú también lo logres.
              </p>
          </div>
      </div>
  </section>
  )
}