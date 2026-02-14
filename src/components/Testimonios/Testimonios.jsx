import { useState, useRef, useEffect } from 'react'

import sergio from "../../assets/images/sergio.jpg"
import Luis from "../../assets/images/Luis.png"

import adriana from "../../assets/images/sergio.jpg"
import patricia from "../../assets/images/patricia.png"
import francisco from "../../assets/images/Luis.png"
import "./Testimonios.css"

export default function Testimonios() {
  const [index, setIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth < 768 ? 1 : 3
  )
  const carouselRef = useRef(null)

  const [activeTestimonial, setActiveTestimonial] = useState(null)

  const CARD_WIDTH = 240
  const totalCards = 3

  const TESTIMONIALS = {
    'Patricia Morales': {
      name: 'Patricia Morales',
      role: 'SA',
      image: patricia,
      alt: 'Patricia Morales',
      paragraphs: [
        'Después de cerrar una etapa profunda de mi vida, tuve que seguir adelante, aprender a reinventarme con disciplina y determinación.',
        'Con casi 60 años, inicié esta carrera hoy cuento con resultados y reconocimientos que respaldan mi trabajo.'
      ]
    },
    'Luis Salazar': {
      name: 'Luis Salazar',
      role: 'SA',
      image: Luis,
      alt: 'Luis Salazar',
      paragraphs: [
        'Después de pasar por muchos trabajos donde el esfuerzo nunca fue recompensado, decidí empezar esta carrera profesional en Carta Business Group.',
        'Hoy, gracias a la constancia y la perseverancia, he logrado resultados que un día parecían imposibles.'
      ]
    },
    'Adriana Rangel': {
      name: 'Adriana Rangel',
      role: 'SGA',
      image: sergio,
      alt: 'Adriana Rangel',
      paragraphs: [
        'Sergio destaca por su mentalidad de crecimiento y su liderazgo en el día a día. Ha construido confianza a través de resultados consistentes.',
        'Su trayectoria demuestra que el liderazgo se entrena: con hábitos, visión y la capacidad de sostener al equipo en momentos clave.'
      ]
    }
  }

  useEffect(() => {
    const onResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3)
      setIndex(0)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!carouselRef.current) return
    const offset = index * CARD_WIDTH
    carouselRef.current.style.transform = `translateX(-${offset}px)`
  }, [index])

  const next = () => {
    if (index < totalCards - visibleCards) setIndex(prev => prev + 1)
  }

  const prev = () => {
    if (index > 0) setIndex(prev => prev - 1)
  }

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
              <p className='descriptionText'>
                En mi primer año logré ingresos superiores a $100,000, reflejo de constancia y enfoque.
                Mi historia demuestra que el crecimiento y los nuevos comienzos no tienen edad.
              </p>
            </div>
        </div>
      </div>

      <div className="marcoTestimonios">
        <div className='cardTestimonio'>
          <img className="cardImageTop" src={francisco} alt="Patricia Morales" />
            <div className="cardBody">
              <h3 className='memberName'>Francisco Zambrano</h3>
              <p className='memberStatus'>SA</p>
              <p className='descriptionText'>
                Después de pasar por muchos trabajos donde el esfuerzo nunca fue recompensado, decidí empezar esta carrera profesional en Carta Business Group.
              </p>
              <p className='descriptionText'>
                Antes de dar ese paso, lo perdí todo: fui desalojado, caí en quiebra y junto a mi esposa y mis dos hijos tuve que dormir en un hotel. Llegué a Las Vegas gracias al apoyo de mis supervisores, porque ni siquiera tenía para los pasajes. Empecé desde cero, con miedo pero con determinación. Hoy, gracias a la constancia y la perseverancia, he logrado resultados que un día parecían imposibles.
              </p>
            
            </div>
        </div>
      </div>

      <div className="marcoTestimonios">
        <div className='cardTestimonio'>
          <img className="cardImageTop" src={adriana} alt="Patricia Morales" />
            <div className="cardBody">
              <h3 className='memberName'>Adriana Rangel</h3>
              <p className='memberStatus'>Agent</p>
              <p className='descriptionText'>
                Text text text text text text text text text text text 
              </p>
              <p className='descriptionText'>
                Text text text text text text text text text text text 
              </p>
            </div>
        </div>
      </div>

    </section>
  )
}
