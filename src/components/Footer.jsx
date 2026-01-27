import wasap from "../assets/images/wasap.png"
import Instagram from "../assets/images/Instagram.png"
import Facebook from "../assets/images/Facebook.png"
import Tictoc from "../assets/images/Tictoc.png"
import Youtube from "../assets/images/Youtube.png"

export default function Footer() {
return (
  <footer className="p-5">
      <div className="final d-flex flex-column flex-md-row justify-content-md-between align-items-center">
          <div className="legales text-center text-md-left">
                  <a href="#">Política de privacidad</a> <br />
                  <a href="#">Términos y condiciones</a>
          </div>
          <div className="logos-contenedor">
              <h2>¡Sígueme!</h2>
              <div className="logos d-flex w-100 justify-center">
                  <a href="https:"><span className="wasap px-3"> 
                      <img src={wasap} alt="Logo wasap" />
                  </span></a>
                  <a href="https://www.instagram.com/yrazucarmona?igsh=emdpMW1oNmJpaWJh"><span className="instagram px-3"> 
                      <img src={Instagram} alt="Logo Instagram" />
                  </span></a>
                  <a href="https://www.facebook.com/share/17ZPsfERfZ/"><span className="facebook px-3">
                      <img src={Facebook} alt="Logo Facebook" /> 
                      </span></a>
                  <a href="https://www.tiktok.com/@yrazucarmona?_t=ZS-90IbuLR5raX&_r=1"><span className="tictoc px-3"> 
                      <img src={Tictoc} alt="Logo Tictoc" />
                  </span></a>
                  <a href="https://youtube.com/@yrazucarmona?si=YVrsvvX2s7LnnbNp"><span className="youtube px-3"> 
                      <img src={Youtube} alt="Logo Youtube" />
                  </span></a>
              </div>
          </div>

          <div className="email-contacto text-center text-md-right">
              <a href="mailto:teamyrazu@gmail.com">teamyrazu@gmail.com</a>
              <p>
                  Yrazú Carmona Website <br />
                  Copyright © 2025 
              </p>
          </div>   
      </div>
  </footer>  
  )
}