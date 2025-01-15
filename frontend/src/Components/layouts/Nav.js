import React from "react";
import {Link} from "react-router-dom"
import '../../Styles/Components/Layouts/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className="navbar">
                <img src="img\Hermes.svg" alt='logo hermes'></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav