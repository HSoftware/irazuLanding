
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import separador02 from "../../assets/images/separador02.png"
import "./Footer.css"




export default function Footer() {
return (
  <footer className="p-5">
      <div className="final">
          
    <div className="logos-contenedor">
        <h2>¡Sígueme!</h2>
        <div className="logos">
            
            <a href="https://www.instagram.com/yrazucarmona?igsh=emdpMW1oNmJpaWJh"><span className="instagram px-3"> 
                <BsInstagram size="35px"/>
            </span></a>

            <a href="https://www.facebook.com/share/17ZPsfERfZ/"><span className="facebook px-3">
                <BsFacebook size="35px"/>
            </span></a>

        </div>  
    </div>

            <img src={separador02} alt="" className="separador"/>
            
            <div className="legales text-center">
                  <a href="#">Política de privacidad</a> <br />
                  <a href="#">Términos y condiciones</a>
          </div>

            <img src={separador02} alt="" className="separador"/>

          <div className="email-contacto">
              <a href="mailto:teamyrazu@gmail.com">teamyrazu@gmail.com</a>
              <p className="font-weight-bold pt-4 text-center">
                  Yrazú Carmona Website<br />
                  Copyright © 2025 
              </p>
          </div>   
      </div>
    <a href="https:"><span className="wasap"> 
        <BsWhatsapp size="45px"/>
    </span></a>
  </footer>  
  )
}