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

        <div className="legales text-center mt-4">
          <a
            data-toggle="modal"
            data-target="#modalPrivacidad"
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "#AF924C",
              fontWeight: "bold",
            }}
          >
            Política de privacidad
          </a>
          <br />
          <a
            href="#!"
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Términos y condiciones
          </a>
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

      {/* Modal de Política de Privacidad */}
      <div
        className="modal fade"
        id="modalPrivacidad"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content text-dark">
            <div className="modal-header">
              <h5 className="modal-title">Política de Privacidad</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body text-left"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <h6 className="font-weight-bold">
                1. Uso de tecnologías de seguimiento
              </h6>
              <p>
                Este sitio web utiliza el <strong>Meta Pixel</strong> (Píxel de
                Facebook) para analizar la interacción de los usuarios y
                optimizar nuestras campañas publicitarias. Esta herramienta
                permite recolectar información sobre cómo los visitantes
                interactúan con la página, lo que nos permite mostrar anuncios
                más relevantes y medir su efectividad.
              </p>

              <h6 className="font-weight-bold mt-4">2. Recolección de Datos</h6>
              <p>
                Los datos recolectados a través del píxel son procesados por
                Meta de forma anónima para nosotros. No almacenamos datos
                personales sensibles como nombres o correos a menos que usted
                los proporcione voluntariamente a través de nuestros formularios
                de contacto.
              </p>

              <h6 className="font-weight-bold mt-4">
                3. Control de Privacidad
              </h6>
              <p>
                Usted puede gestionar sus preferencias de publicidad o
                desactivar estos seguimientos a través de la configuración de
                anuncios de su propia cuenta de Facebook. También puede navegar
                en modo incógnito o utilizar bloqueadores de contenido en su
                navegador.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
