import React from "react";
import '../../src/Styles/Components/Pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder-contacto">
            <div>
                <h2>¡Hablemos!</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="telofono">Telofono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p>
                        <p className="acciones">
                            <input type="submit" value="submit" />
                        </p>
                    </p>
                </form>
            </div>

            <div className="datos">
                <h2>Tambien podes contactarnos por:</h2>
                <ul>
                    <li>Telefono: 24782934</li>
                    <li>Mail: random@random.com</li>
                    <li>Facebook: lorem ipsum</li>
                    <li>Instagram: lorem ipsum</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage
