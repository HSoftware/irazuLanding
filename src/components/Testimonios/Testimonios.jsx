import { useState, useRef, useEffect } from 'react'

import sergio from "../../assets/images/sergio.jpg"
import Luis from "../../assets/images/Luis.png"

import adriana from "../../assets/images/sergio.jpg"
import patricia from "../../assets/images/patricia.png"
import francisco from "../../assets/images/Luis.png"
import "./Testimonios.css"

export default function Testimonios() {


  return (
    <section className="prueba-social p-5">
 
      {/* ************************************* sección de prueba **************************/}

      <h2 className='tituloPruebaSocial'>
        Ellos ya <span className='goldenText'>transformaron su vida</span><br />
        Inspírate con su experiencia
      </h2>
      
      <div className="marcoTestimonios">
        <div className='cardTestimonio'>
          <img className="cardImageTop" src={patricia} alt="Patricia Morales" />
            <div className="cardBody">
              <h3 className='memberName'>Patricia Morales</h3>
              <p className='memberStatus'>SA</p>
              <p className='descriptionText'>Después de cerrar una etapa profunda de mi vida, tuve que seguir adelante, aprender a reinventarme con disciplina y determinación.
                Con casi 60 años, inicié esta carrera hoy cuento con resultados y reconocimientos que respaldan mi trabajo.
                como Rookie Producer, Top Producer.
              </p>
            </div>
        </div>

        <div className='cardTestimonio'>
          <img className="cardImageTop" src={francisco} alt="Patricia Morales" />
            <div className="cardBody">
              <h3 className='memberName'>Francisco Zambrano</h3>
              <p className='memberStatus'>SA</p>
              <p className='descriptionText'>
                Después de pasar por muchos trabajos donde el esfuerzo nunca fue recompensado, decidí empezar esta carrera profesional en Carta Business Group.
              </p>
              <p className='descriptionText'>
                Antes de dar ese paso, lo perdí todo: fui desalojado, caí en quiebra y junto a mi esposa
              </p>
            
            </div>
        </div>
 
        <div className='cardTestimonio'>
          <img className="cardImageTop" src={adriana} alt="Patricia Morales" />
            <div className="cardBody">
              <h3 className='memberName'>Adriana Rangel</h3>
              <p className='memberStatus'>Agent</p>
              <p className='descriptionText'>
                Text text text text text text text text text text text  text text text text text text text text text text  text text text text text text text text text text  text text text text text text text text text text  text text text text text text text text text text  text text text text text text text text text text 
              </p>
              
            </div>
        </div>
      </div>

    </section>
  )
}
