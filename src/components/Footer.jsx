
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import separador02 from "../assets/images/separador02.png"




export default function Footer() {
return (
  <footer className="p-5">
      <div className="final d-flex flex-column flex-md-row justify-content-md-between align-items-center">
          
          <div className="logos-contenedor">
              <h2>¡Sígueme!</h2>
                <div className="logos d-flex w-100 justify-center">
                    <a href="https:"><span className="wasap px-3"> 
                        <BsWhatsapp size="35px"/>
                    </span></a>
                    
                    <a href="https://www.instagram.com/yrazucarmona?igsh=emdpMW1oNmJpaWJh"><span className="instagram px-3"> 
                        <BsInstagram size="35px"/>
                    </span></a>

                    <a href="https://www.facebook.com/share/17ZPsfERfZ/"><span className="facebook px-3">
                        <BsFacebook size="35px"/>
                    </span></a>
                    
                    <a href="https://www.tiktok.com/@yrazucarmona?_t=ZS-90IbuLR5raX&_r=1"><span className="tictoc px-3"> 
                        <BsTiktok size="35px"/>
                    </span></a>

                    <a href="https://youtube.com/@yrazucarmona?si=YVrsvvX2s7LnnbNp"><span className="youtube px-3"> 
                        <BsYoutube size="35px"/>
                    </span></a>
                </div>
            </div>

            <img src={separador02} alt="" className="separador"/>
            
            <div className="legales text-center text-md-left">
                  <a href="#">Política de privacidad</a> <br />
                  <a href="#">Términos y condiciones</a>
          </div>

            <img src={separador02} alt="" className="separador"/>

          <div className="email-contacto text-center text-md-right">
              <a href="mailto:teamyrazu@gmail.com">teamyrazu@gmail.com</a>
              <p className="font-weight-bold pt-4">
                  Yrazú Carmona Website <br />
                  Copyright © 2025 
              </p>
          </div>   
      </div>
  </footer>  
  )
}