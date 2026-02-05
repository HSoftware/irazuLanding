import separador02 from "../assets/images/separador02.png"


export default function Respaldo() {
return (
  <div className="respaldo pt-2 pb-5">
    <img src={separador02} alt="" className="separador02 img-fluid mx-auto d-block"/>
        
    <div className="texto-respaldo">
      <h3 className="mt-5 px-3 py-md-5">
        Respaldado por American Income Life
      </h3>
      <br />
      <p className="text-center">
        Compañia con más de 70 años de trayectoria y máxima acreditación en la industria financiera de Estados Unidos
      </p>
    </div>
      
  </div>
  )
}