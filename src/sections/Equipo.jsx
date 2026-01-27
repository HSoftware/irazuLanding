import { useState, useRef, useEffect } from "react"

import Team1 from "../assets/images/Team1.png"
import Team2 from "../assets/images/Team2.png"
import Team3 from "../assets/images/Team3.png"

export default function Equipo() {
    const [index, setIndex] = useState(0)
    const carouselRef = useRef(null)
    const countersRef = useRef([])
    const [hasAnimated, setHasAnimated] = useState(false)

    const images = [Team1, Team2, Team3]
    const total = images.length

    useEffect(() => {
        if (!carouselRef.current) return
        carouselRef.current.style.transform = `translateX(-${index * 100}%)`
    }, [index])

    const next = () => {
        if (index < total - 1) setIndex(prev => prev + 1)
    }

    const prev = () => {
        if (index > 0) setIndex(prev => prev - 1)
    }

    // CONTADORES
    useEffect(() => {
        if (hasAnimated) return

        const observer = new IntersectionObserver(
            entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                animateCounters()
                setHasAnimated(true)
                observer.disconnect()
                }
            })
            },
            { threshold: 0.4 }
        )

        countersRef.current.forEach(el => el && observer.observe(el))

        return () => observer.disconnect()
        }, [hasAnimated])

        const animateCounters = () => {
        countersRef.current.forEach(el => {
            const target = Number(el.dataset.to)
            let current = 0
            const duration = 2000
            const step = Math.ceil(target / (duration / 16))

            const update = () => {
            current += step
            if (current >= target) {
                el.textContent = target
            } else {
                el.textContent = current
                requestAnimationFrame(update)
            }
            }

            update()
        })
        }

return (
    <section className="equipo p-5">
        <h2>
            Aquí no caminas solo <br />
            Aprendes, creces y lideras en equipo
        </h2>

        {/* CARRUSEL */}
        <div className="equipo-carousel-wrapper">
            <div className="equipo-carousel">
            <div
                ref={carouselRef}
                className="equipo-carousel-track"
            >
                {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Foto equipo ${i + 1}`}
                    loading="lazy"
                />
                ))}
            </div>
            </div>

                <div className="carousel-controls mt-3">
                    <button onClick={prev} className="btn">&lt;</button>
                    <button onClick={next} className="btn">&gt;</button>
                </div>
            </div>

        {/* CONTADORES */}
        
        <div className="contadores d-flex flex-row flex-wrap justify-content-center pt-5 text-center">
            <div className="contador m-3">
                
                <p>
                    <span className="signo">+</span>
                    <span
                        className="numero"
                        data-to="500"
                        ref={el => (countersRef.current[0] = el)}
                    >
                        0
                    </span>
                </p> 
                <p>
                    Personas han logrado obtener alrededor de $3.5 billones de dólares anuales en AO,
                    una de las 50 mejores y más felices compañias para trabajar.
                </p>
            </div> 

            <div className="contador m-3">
                <p>
                    <span className="signo">+</span>
                    <span
                        className="numero"
                        data-to="1500"
                        ref={el => (countersRef.current[1] = el)}
                    >
                        0
                    </span>

                </p>
                <p>
                    personas han logrado obtener alrededor de $3.5 billones de dólares anuales en AO,
                    una de las 50 mejores y más felices compañias para trabajar.
                </p>
            </div> 

            <div className="contador m-3">
                <p>
                    <span className="signo">+</span>
                    <span
                        className="numero"
                        data-to="2500"
                        ref={el => (countersRef.current[2] = el)}
                    >
                            0
                    </span>

                </p> 
                <p>
                    personas han logrado obtener alrededor de $3.5 billones de dólares anuales en AO,
                    una de las 50 mejores y más felices compañias para trabajar.
                </p>
            </div> 
        </div>
      
  </section>
  )
}