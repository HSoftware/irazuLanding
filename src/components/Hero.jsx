import Enganche from "../sections/Enganche"
import Formulario from "../sections/Formulario"
import Respaldo from "../sections/Respaldo"
import separador01 from "../assets/images/separador01.png"



export default function Hero() {

    return (
        <div className="HeroSection">
            <div className="HeroTitle">
                <h1 className="text-center">
                    Construye tu carrera sin límites en la industria financiera
                </h1>

                <img src={separador01} alt="" className="separador"/>
            </div>
            
            <div className="introSection">
                <div className="introContent">
                    <Enganche />
                    <Formulario />
                </div>
                <Respaldo />
            </div>
        </div>
    )
}