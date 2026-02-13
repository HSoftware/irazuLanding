import { useState, useRef, useEffect } from 'react'

import sergio from "../assets/images/sergio.jpg"

import patricia from "../assets/images/patricia.png"
import Luis from "../assets/images/Luis.png"
import playIcon from "../assets/images/play-icon.svg"

import sergioVideo from '../assets/videos/sergio.mp4'

import patriciaVideo from '../assets/videos/patricia.mp4'
import luisVideo from '../assets/videos/luis.mp4'

export default function Testimonios() {
    const [index, setIndex] = useState(0)
    const [visibleCards, setVisibleCards] = useState(
        window.innerWidth < 768 ? 1 : 3
    )
    const carouselRef = useRef(null)

    const [videoSrc, setVideoSrc] = useState(null)         // Estado para los videos


    const CARD_WIDTH = 240 // ancho real de una card (incluye márgenes)
    const totalCards = 3

    // Mapa de videos
    const VIDEOS = {
    'Sergio Carta': sergioVideo,
    'Patricia Morales': patriciaVideo,
    'Luis Salazar': luisVideo,
    /* 
    'Jennifer Terife': jenniferVideo,
    'Yrazú Carmona': yrazuVideo,
    'Alejandro Dávila': alejandroVideo,
    'Doris Diaz': dorisVideo,
    */
    }


    // Ajusta cards visibles según tamaño de pantalla
    useEffect(() => {
        const onResize = () => {
        setVisibleCards(window.innerWidth < 768 ? 1 : 3)
        setIndex(0) // reset seguro al cambiar layout
        }

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    // Mueve el carrusel
    useEffect(() => {
        if (!carouselRef.current) return
        const offset = index * CARD_WIDTH
        carouselRef.current.style.transform = `translateX(-${offset}px)`
    }, [index])

    const next = () => {
        if (index < totalCards - visibleCards) {
        setIndex(prev => prev + 1)
        }
    }

    const prev = () => {
        if (index > 0) {
        setIndex(prev => prev - 1)
        }
    }


return (
  <section className="prueba-social p-5">
    <h2>
        Ellos ya transformaron su vida <br />
        Inspírate con su experiencia
    </h2>
    <br />

    <div className="carousel-container overflow-hidden">

        <div 
            ref={carouselRef}
            className="d-flex"
            style={{ transition: 'transform 0.5s ease' }}
        >
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
                        className="boton py-2 px-3 d-block mx-auto"
                        onClick={() => setVideoSrc(VIDEOS['Patricia Morales'])}
                        >
                        <img src={playIcon} alt="reproducir" />
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
                        className="boton py-2 px-3 d-block mx-auto"
                        onClick={() => setVideoSrc(VIDEOS['Luis Salazar'])}
                        >
                        <img src={playIcon} alt="reproducir" />
                    </button>
                </div>
            </div>

            <div className="integrante card">                    
                <img className="card-img-top rounded-circle mx-auto pt-3" src={sergio} alt="Sergio Carta" />
                <div className="card-body text-center position-relative">
                    <h3>Sergio Carta</h3>
                    <p>
                        De empleado a líder <br />
                        SGA
                    </p>
                    
                    <button
                        type="button"
                        className="boton py-2 px-3 d-block mx-auto"
                        onClick={() => setVideoSrc(VIDEOS['Sergio Carta'])}
                        >
                        <img src={playIcon} alt="reproducir" />
                    </button>
                </div>
            </div>

            

        </div>
        
        <div className="carousel-controls text-center mt-3">
            <button onClick={prev} className="btn mx-2">&lt;</button>
            <button onClick={next} className="btn mx-2">&gt;</button>
        </div>

        {videoSrc && (
            <div className="vmodal" onClick={() => setVideoSrc(null)}>
                <div className="vbox" onClick={e => e.stopPropagation()}>
                <button className="vclose" onClick={() => setVideoSrc(null)}>
                    ×
                </button>
                <video src={videoSrc} controls autoPlay />
                </div>
            </div>
        )}

      </div>
  </section>
  )
}


