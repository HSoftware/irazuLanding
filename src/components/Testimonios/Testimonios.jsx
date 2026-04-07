import { useState, useRef, useEffect } from "react";

import sergio from "../../assets/images/sergio.jpg";
import Luis from "../../assets/images/Luis.png";

import doris from "../../assets/images/Doris.png";
import patricia from "../../assets/images/patricia.png";
import francisco from "../../assets/images/Luis.png";
import "./Testimonios.css";

export default function Testimonios() {
  return (
    <section className="prueba-social p-5">
      {/* ************************************* sección de prueba **************************/}

      <h2 className="tituloPruebaSocial">
        Ellos ya <span className="goldenText">transformaron su vida</span>
        <br />
        Inspírate con su experiencia
      </h2>

      <div className="marcoTestimonios">
        <div className="cardTestimonio">
          <img className="cardImageTop" src={patricia} alt="Patricia Morales" />
          <div className="cardBody">
            <h3 className="memberName">Patricia Morales</h3>
            <p className="memberStatus">SA</p>
            <p className="descriptionText">
              Cerré una etapa profunda de mi vida y elegí reinventarme. Con casi
              60 años, inicié esta carrera profesional con disciplina y
              determinación.
            </p>
            <p className="descriptionText">
              El resultado habla por sí solo; más de $100,000 en ingresos en mi
              primer año.
            </p>
            <p className="descriptionText">
              Mi historia tiene un mensaje claro — el crecimiento no tiene edad.
              Los nuevos comienzos tampoco.
            </p>
          </div>
        </div>

        <div className="cardTestimonio">
          <img
            className="cardImageTop"
            src={francisco}
            alt="Patricia Morales"
          />
          <div className="cardBody">
            <h3 className="memberName">Francisco Zambrano</h3>
            <p className="memberStatus">SA</p>
            <p className="descriptionText">
              Trabajé en empleos donde mi esfuerzo nunca fue valorado, hasta que
              decidí apostar por mí mismo en Carta Business Group. Con el
              respaldo de mis managers Yrazú y Alejandro, superé la adversidad,
              encontré mi propósito y transformé mi vida.
            </p>
            <p className="descriptionText">
              Hoy soy Agente Supervisor y ocupo el #1 en el Top 5 de Productores
              del Mes — equipo Las Vegas/Arizona.
            </p>
          </div>
        </div>

        <div className="cardTestimonio">
          <img className="cardImageTop" src={doris} alt="Doris Diaz" />
          <div className="cardBody">
            <h3 className="memberName">Doris Diaz</h3>
            <p className="memberStatus">SA</p>
            <p className="descriptionText">
              Todo empezó con una llamada. Yo tenía tres trabajos y buscaba algo
              más.
            </p>
            <p className="descriptionText">
              En 2023 encontré ese algo; aprendizaje constante, crecimiento real
              y un equipo que me acompaña en cada paso.
            </p>
            <p className="descriptionText">
              Hoy tengo una carrera profesional sólida, con logros y resultados
              que la respaldan; Founders Club y Top Supervising Agent.
              Construido con constancia, propósito y equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
