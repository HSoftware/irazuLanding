import star from "../assets/images/star.svg"
import separador01 from "../assets/images/separador01.png"
import star02 from "../assets/images/star02.png"
import separador02 from "../assets/images/separador02.png"

export default function Enganche() {
return (
  <section className="enganche d-flex flex-column align-items-center pt-5 pb-4 pl-4 pr-4">
    <h1 className="text-center">
        Construye tu carrera sin límites en la industria financiera
    </h1>

    <img src={separador01} alt="" className="separador"/>

    <h2 className="enganche__sub-titulo font-weight-bold p-3">Aplica y acciona</h2>
    
    <div className="d-flex flex-column flex-md-row">
        <div className="pl-md-5">
            <p className="text-md-left pt-2 pl-5">
                <img src={star02} alt="star" className="star02" />
                Comunidad latina que trabaja en español, desde cualquier lugar
            </p>
            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <p className="text-md-left pt-4 pl-5">
                <img src={star02} alt="star" className="star02" />
                Bonos de acuerdo con tus metas
            </p>
            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <p className="text-md-left pt-4 pl-5">
                <img src={star02} alt="star" className="star02" />
                Plataforma digital flexible y gratuita
            </p>
            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
            
            <p className="text-md-left pt-4 pl-5">
                <img src={star02} alt="star" className="star02" />
                Capacitación desde cero
            </p>
            <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>

        </div>        
    </div>

  </section>
  )
}