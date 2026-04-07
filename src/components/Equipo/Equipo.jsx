import { useState, useRef, useEffect } from "react";
import "./Equipo.css";
import Logo from "../../assets/images/Logo Mindset.jpg";
import Grupo from "../../assets/images/Collage Equipo.png";

export default function Equipo() {
  const countersRef = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // CONTADORES
  // CONTADORES
  useEffect(() => {
    // Si ya animó o no hay referencias, no hacer nada
    if (hasAnimated || countersRef.current.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento es visible
          if (entry.isIntersecting) {
            animateCounters();
            setHasAnimated(true);
            observer.disconnect(); // Dejar de observar una vez activado
          }
        });
      },
      { threshold: 0.1 }, // Más sensible para asegurar que dispare
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    countersRef.current.forEach((el) => {
      if (!el) return;

      const target = Number(el.dataset.to);
      let current = 0;
      const duration = 3500; // 2 segundos

      // Ajuste para números pequeños: incremento mínimo de 1
      const increment = Math.max(1, target / (duration / 16));

      const update = () => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = Math.floor(current);
          requestAnimationFrame(update);
        }
      };

      update();
    });
  };

  return (
    <section className="equipo p-5">
      <div className="text-center">
        <img
          src={Logo}
          alt="Logo Mindset"
          className="mb-3"
          style={{ maxWidth: "150px" }}
        />
      </div>

      <h2>
        Aquí no caminas solo <br />
        Aprendes, creces y lideras en equipo
      </h2>

      <div className="equipo-imagen-unica mt-4">
        <img
          src={Grupo}
          alt="Nuestro Equipo"
          className="img-fluid"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* CONTADORES */}

      <div className="contadores d-flex flex-row flex-wrap justify-content-center pt-5 text-center">
        <div className="contador m-3">
          <p>
            <span className="signo">+</span>
            <span
              className="numero"
              data-to="50" // Cambiado a 50
              ref={(el) => (countersRef.current[0] = el)}
            >
              0
            </span>
          </p>
          <p>Una de las 50 mejores y más felices compañias para trabajar.</p>
        </div>

        <div className="contador m-3">
          <p>
            <span className="signo">$</span>
            <span
              className="numero"
              data-to="58" // Solo el número para la animación
              ref={(el) => (countersRef.current[1] = el)}
            >
              0
            </span>
            <span className="signo">K</span>
          </p>
          <p>Ingreso promedio en el primer año como agente.</p>
        </div>

        <div className="contador m-3">
          <p>
            <span className="signo">$</span>
            <span
              className="numero"
              data-to="100" // Solo el número para la animación
              ref={(el) => (countersRef.current[2] = el)}
            >
              0
            </span>
            <span className="signo">K</span>
          </p>
          <p>Potencial de ingresos sin techo ni límites</p>
        </div>
      </div>
    </section>
  );
}
