import { BsQuestionCircle } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsGlobeAmericas } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";


import { BsDiagram3 } from "react-icons/bs";



import { useState } from "react"

export default function FAQ() {
      const [openIndex, setOpenIndex] = useState(null)

      const faqs = [
  {
    icon: <BsQuestionCircle size="30px"/>,
    question: "¿Necesito experiencia previa?",
    answer: "No. Ofrecemos capacitación y acompañamiento desde cero."
  },
  {
    icon: <BsDiagram3 size="30px"/>,
    question: "¿Esto es multinivel o un curso?",
    answer: "No. Es una carrera profesional en la industria financiera."
  },
  {
    icon: <BsGlobeAmericas size="30px"/>,
    question: "¿Puedo trabajar en español y desde cualquier lugar?",
    answer: "Sí, puedes trabajar en español. No es un trabajo remoto."
  },
  {
    icon: <BsCheckCircle size="30px"/>,
    question: "¿Qué necesito para aplicar?",
    answer: "Poder trabajar legalmente en EE.UU. + opción ITIN en 5 estados."
  },
  {
    icon: <BsFileEarmarkText size="30px"/>,
    question: "¿Puedo trabajar con ITIN?",
    answer: "Sí, en estados específicos."
  },
  {
    icon: <BsPeople size="30px"/>,
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
                <span className="icon me-3">{faq.icon}</span>
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