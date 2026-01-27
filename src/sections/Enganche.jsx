import star from "../assets/images/star.svg"

export default function Enganche() {
return (
  <section className="enganche d-flex flex-column align-items-center pt-5 pb-4 pl-4 pr-4">
    <h1 className="text-center">
        Construye tu carrera sin límites en la industria financiera
    </h1>
    <h2 className="enganche__sub-titulo font-weight-bold p-3">Aplica y acciona</h2>
    <p className="text-center ">
        Aquí no caminas solo, aprendes, creces y lideras en equipo
    </p>
    <div className="d-flex flex-column flex-md-row">
        <div className="pl-md-5">
            <p className="text-center text-md-left pt-2">
                <img src={star} alt="star" className="star" />
                Comunidad latina que trabaja en español, desde cualquier lugar
            </p>
            <p className="text-center text-md-left pt-2">
                <img src={star} alt="star" className="star" />                        
                Acceso a una Plataforma de Organización Financiera
            </p>
            <p className="text-center text-md-left pt-2">
                <img src={star} alt="star" className="star" />
                Mentoría en vivo semanal
            </p>
        </div>
        <div className="pr-md-5">
            <p className="text-center text-md-left pt-2">
                <img src={star} alt="star" className="star" />
                Bonos de acuerdo con tus metas
            </p>
            <p className="text-center text-md-left pt-2">
                <img src={star} alt="star" className="star" />
                Capacitación desde cero
            </p>
            <p className="text-center text-md-left pt-2">
                <img src={star} alt="star" className="star" />
                Apoyo y asesoría en creación de Marca Personal y Redes Sociales
            </p>
        </div>
        
    </div>

  </section>
  )
}