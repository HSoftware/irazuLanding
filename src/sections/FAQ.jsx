import { useState } from "react"

export default function FAQ() {
      const [openIndex, setOpenIndex] = useState(null)

      const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No. Ofrecemos capacitación y acompañamiento desde cero."
  },
  {
    question: "¿Esto es multinivel o un curso?",
    answer: "No. Es una carrera profesional en la industria financiera."
  },
  {
    question: "¿Puedo trabajar en español y desde cualquier lugar?",
    answer: "Sí, puedes trabajar en español. No es un trabajo remoto."
  },
  {
    question: "¿Qué necesito para aplicar?",
    answer: "Poder trabajar legalmente en EE.UU. + opción ITIN en 5 estados."
  },
  {
    question: "¿Puedo trabajar con ITIN?",
    answer: "Sí, en estados específicos."
  },
  {
    question: "¿Tengo que traer gente para el negocio?",
    answer: "No. No es un trabajo multinivel."
  }
]


return (
  <section className="preguntas px-3 mx-auto">
    <div className="contenedor-preguntas p-5">
      <h2 className="mb-5">Preguntas frecuentes</h2>

      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="faq-boton btn-block"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
            <div className="faq-header">
                <h3 className="py-4">{faq.question}</h3>
                <span className="faq-icon">
                {openIndex === i ? "−" : "+"}
                </span>
            </div>
        </button>

          {openIndex === i && (
            <div className="faq-answer px-5 pb-4">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
)

}