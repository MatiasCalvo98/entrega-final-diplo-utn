import React from "react";
import { useState } from "react";
import axios from 'axios'
import '../../src/Styles/Components/Pages/ContactoPage.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState(initialForm)

    const handleChange = e => {
        const {name,value} = e.target
        setFormData(oldData => ({
            ...oldData,
            [name]:value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setMsg('')
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData)
        setSending(false)
        setMsg(response.data.message)
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder-contacto">
            <div className="contact-form">
                <h2>¡Hablemos!</h2>
                <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
                    <div>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
            </div>
            <h2>Una vez que envies el formulario, nos contactaremos a la brevededad. ¡Estamos ansiosos de trabajar con ustedes! :)</h2>          
        </main>
    )
}

export default ContactoPage
