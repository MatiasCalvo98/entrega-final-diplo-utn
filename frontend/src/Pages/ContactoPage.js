import React from "react";
import '../../src/Styles/Components/Pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder-contacto">
            <div className="contact-form">
                <h2>¡Hablemos!</h2>
                <form className="formulario" action="" method="">
                    <div>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label for="telofono">Telofono</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
            <h2>Una vez que envies el formulario, nos contactaremos a la brevededad. ¡Estamos ansiosos de trabajar con ustedes! :)</h2>          
        </main>
    )
}

export default ContactoPage
