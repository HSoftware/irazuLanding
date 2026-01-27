import irazu from "../assets/images/Yrazu01.jpg" 

export default function PropuestaValor() {
return (
  <section className="propuesta-valor">
      <h2 className="text-center pt-5">Te guiará alguien que ya recorrió este camino</h2>

      <div className="emparejados row px-5">

          <div className="foto-Yrazu d-flex align-items-center col-12 col-md-6 media ">
              <img src={irazu} alt="Foto Yrazú Carmona" />
          </div>

          <div className="sobre-yrazu col-12 col-md-6 pt-5 px-4">
              <p>Y lo continúa recorriendo, ahora acompañada de un gran equipo de trabajo.</p> 
              <p>
                  <strong>Yrazú Carmona</strong>. Mamá, esposa y líder con propósito. <br />
                  En mi 1er año de carrera logré obtener ingresos superiores a $130,000 
              </p>
              <p>
                  Como inmigrante, construí mi carrera liderando equipos latinos en la industria financiera; hoy estos equipos crecen con un propósito, objetivos claros y comunidad. Te acompaño con mentoría real, práctica y constante, porque aquí no caminas solo. 
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