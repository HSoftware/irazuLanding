import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import separador02 from "../../assets/images/separador02.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="p-5">
      <div className="final">
        <div className="logos-contenedor">
          <h2>¡Sígueme!</h2>
          <div className="logos">
            <a
              href="https://www.instagram.com/yrazucarmona?igsh=emdpMW1oNmJpaWJh"
              title="Instagram"
            >
              <span className="instagram px-3">
                <BsInstagram size="35px" />
              </span>
            </a>

            <a
              href="https://www.facebook.com/share/17ZPsfERfZ/"
              title="Facebook"
            >
              <span className="facebook px-3">
                <BsFacebook size="35px" />
              </span>
            </a>

            <a href="mailto:mindsetresetg@gmail.com" title="Correo Electrónico">
              <span className="email px-3">
                <BsEnvelopeAt size="35px" />
              </span>
            </a>
          </div>
        </div>

        <img src={separador02} alt="" className="separador" />

        <div className="legales text-center">
          <a href="#">Política de privacidad</a> <br />
          <a href="#">Términos y condiciones</a>
        </div>

        <img src={separador02} alt="" className="separador" />

        <div className="email-contacto">
          <p className="font-weight-bold pt-4 text-center">
            Yrazú Carmona Website
          </p>
          <p className="font-weight-bold text-center">
            Copyright © 2026. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/17028120428?text=Tu%20Mensaje%20Aquí"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="wasap">
          <BsWhatsapp size="45px" />
        </span>
      </a>
    </footer>
  );
}
