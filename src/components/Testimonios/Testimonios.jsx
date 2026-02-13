import { useState, useRef, useEffect } from 'react'

import sergio from "../../assets/images/sergio.jpg"
import patricia from "../../assets/images/patricia.png"
import Luis from "../../assets/images/Luis.png"
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
      <h2 className='tituloPruebaSocial'>
        Ellos ya <span className='goldenText'>transformaron su vida</span><br />
        Inspírate con su experiencia
      </h2>
      <br />

      <div className="carousel-container overflow-hidden">
        <div
          ref={carouselRef}
          className="d-flex"
          style={{ transition: 'transform 0.5s ease' }}
        >|
          <div className="integrante card">
            <img className="card-img-top rounded-circle mx-auto pt-3" src={patricia} alt="Patricia Morales" />
            <div className="card-body text-center">
              <h3>Patricia Morales</h3>
              <p>
                De los desafíos a las victorias <br />
                SA
              </p>
              <button
                type="button"
                className="py-2 px-3 d-block mx-auto testimonio"
                onClick={() => setActiveTestimonial(TESTIMONIALS['Patricia Morales'])}
              >
                Ver
              </button>
            </div>
          </div>

          <div className="integrante card">
            <img className="card-img-top rounded-circle mx-auto pt-3" src={Luis} alt="Luis Salazar" />
            <div className="card-body text-center">
              <h3>Luis Salazar</h3>
              <p>
                Una oportunidad que me transformó la vida <br />
                SA
              </p>
              <button
                type="button"
                className="py-2 px-3 d-block mx-auto testimonio"
                onClick={() => setActiveTestimonial(TESTIMONIALS['Luis Salazar'])}
              >
                Ver
              </button>
            </div>
          </div>

          <div className="integrante card">
            <img className="card-img-top rounded-circle mx-auto pt-3" src={sergio} alt="Adriana Rangel" />
            <div className="card-body text-center position-relative">
              <h3>Adriana Rangel</h3>
              <p>
                De empleado a líder <br />
                SGA
              </p>
              <button
                type="button"
                className="py-2 px-3 d-block mx-auto testimonio"
                onClick={() => setActiveTestimonial(TESTIMONIALS['Adriana Rangel'])}
              >
                Ver
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-controls text-center mt-3">
          <button onClick={prev} className="btn mx-2">&gt;</button>
        </div>

        {activeTestimonial && (
          <div
            className="vmodal"
            role="dialog"
            aria-modal="true"
            aria-label={`Testimonio de ${activeTestimonial.name}`}
            onClick={() => setActiveTestimonial(null)}
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,.6)',
              zIndex: 9999
            }}
          >
            <div
              className="vbox"
              onClick={e => e.stopPropagation()}
              style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '12px',
                maxWidth: '520px',
                width: '92%',
                color: '#025951'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="vclose"
                  onClick={() => setActiveTestimonial(null)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: '24px',
                    lineHeight: 1,
                    cursor: 'pointer',
                    color: '#025951'
                  }}
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.alt}
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '999px',
                    display: 'block',
                    margin: '0 auto 12px'
                  }}
                />

                <h3 style={{ marginBottom: '6px', color: '#025951' }}>
                  {activeTestimonial.name}
                </h3>
                <p style={{ marginBottom: '14px', color: '#025951' }}>
                  <strong>{activeTestimonial.role}</strong>
                </p>

                <p style={{ marginBottom: '10px', color: '#025951' }}>
                  {activeTestimonial.paragraphs[0]}
                </p>
                <p style={{ marginBottom: 0, color: '#025951' }}>
                  {activeTestimonial.paragraphs[1]}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
