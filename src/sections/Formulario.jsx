import { useState } from "react"

export default function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        estado: '',
        permisoOpciones: 'si',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        const { nombre, email, telefono, estado } = formData

        if (!nombre || !email || !telefono || !estado) {
            e.preventDefault()
            alert('Por favor completa todos los campos.')
            return
        }
    }


    return (
    <section id="form-aplicar" className="formulario d-flex flex-column align-items-center ">

        <div className="preguntas">
        <h2 id="aplicar">Aplica aquí</h2>
        
        <form  
            action="https://formspree.io/f/xblapdko" 
            method="post" 
            noValidate
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="nombre" 
                    placeholder="Tu nombre completo" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="ejemplo@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required     
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input 
                    type="tel" 
                    className="form-control" 
                    id="telefono" 
                    name="telefono" 
                    placeholder="(xxx) xxx-xxxx"
                    value={formData.telefono}
                    onChange={handleChange}
                    required 
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="estado">Estado</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="estado" 
                    name="estado" 
                    placeholder="Nombre del estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required 
                />
            </div>
            
            <div className="form-group d-flex flex-column">
                <label>¿Puedes trabajar legalmente en EE.UU.?</label>
                <div>
                    <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="optSi">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id="optSi" 
                                name="permisoOpciones" 
                                value="si" 
                                checked={formData.permisoOpciones === 'si'}
                                onChange={handleChange} 
                            />
                            Sí
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="optNo">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id="optNo" 
                                name="permisoOpciones" 
                                value="no" 
                                checked={formData.permisoOpciones === 'no'}
                                onChange={handleChange}
                            />
                            No
                        </label>
                    </div>
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-lg d-block mx-auto">Enviar</button>
            
            <div className="mt-3 text-center">
                <p className="microtexto">Respuesta en menos de 24 horas. Tu información es privada.</p>
            </div> 
            
        </form>

        </div>
    </section>

    )
}