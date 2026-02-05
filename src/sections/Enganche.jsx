import star from "../assets/images/star.svg"
import separador01 from "../assets/images/separador01.png"
import star02 from "../assets/images/star02.png"
import separador02 from "../assets/images/separador02.png"

export default function Enganche() {
return (
  <section className="enganche d-flex flex-column align-items-center pt-3 pb-4 pl-4 pr-4">
    <h1 className="text-center">
        Construye tu carrera sin límites en la industria financiera
    </h1>

    <img src={separador01} alt="" className="separador"/>

    <h2 className="enganche__sub-titulo font-weight-bold p-3">Aplica y acciona</h2>
    
    <div className="d-flex flex-column flex-md-row">
        <div className="pl-md-5">
            
            <div className="linea">
                <img src={star02} alt="star" className="star02" />
                <p className="text-md-left pt-2 pl-1">
                    Comunidad latina que trabaja en español, desde cualquier lugar
                </p>
            </div>
            
            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <div className="linea pt-4">
                <img src={star02} alt="star" className="star02" />
                <p className="text-md-left pt-2 pl-1">
                    Capacitación desde cero
                </p>
            </div>

            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <div className="linea pt-4">
                <img src={star02} alt="star" className="star02" />
                <p className="text-md-left pt-2 pl-1">
                    Mentoría en vivo semanal.
                </p>
            </div>

            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <div className="linea pt-4">
                <img src={star02} alt="star" className="star02" />
                <p className="text-md-left pt-2 pl-1">
                    Bonos de acuerdo con tus metas
                </p>
            </div>

            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <div className="linea pt-4">
                <img src={star02} alt="star" className="star02" />
                <p className="text-md-left pt-2 pl-1">
                    Acceso a una Plataforma de Organización Financiera. 
                </p>
            </div>

            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <div className="linea pt-4">
                <img src={star02} alt="star" className="star02" />
                <p className="text-md-left pt-2 pl-1">
                    Apoyo y asesoría en creación de Marca Personal y Redes Sociales
                </p>
            </div>

            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>

        </div>        
    </div>

  </section>
  )
}