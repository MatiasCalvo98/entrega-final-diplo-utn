import React from "react";
import '../../Styles/Components/Layouts/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img\Hermes.svg" width="100" alt='logo hermes'></img>
                <h1>Hermes Agency</h1>
            </div>
        </header>
    )
}

export default Header