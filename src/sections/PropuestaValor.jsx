import yrazu from "../assets/images/Yrazu02.jpeg" 

export default function PropuestaValor() {
return (
  <section className="propuesta-valor">
      <h2 className="text-center py-3">Te guiará alguien que ya recorrió este camino</h2>

      <div className="emparejados">

          <div className="foto-Yrazu">
              <img src={yrazu} alt="Foto Yrazú Carmona" />
          </div>

          <div className="sobre-yrazu p-5">
            <h2 className="text-center pt-3">Yrazú Carmona</h2>
            <p className="py">
                Mamá, esposa y líder con propósito.
            </p>
            <p>
                Como inmigrante, construí mi carrera liderando equipos latinos en la industria 
                financiera; hoy estos equipos crecen con un propósito, objetivos claros y comunidad. 
                Te acompaño con mentoría real, práctica y constante, porque aquí no caminas solo. 
            </p>
              
              <p className="mx-auto w-75">
                  &#10003; Agente certificada <br/>
                  &#10003; Ingresos e historias reales. <br/>
              </p>
              <p>
                  Tranformo vidas y mi misión es, ayudarte a que tú también lo logres.
              </p>
          </div>
      </div>
  </section>
  )
}