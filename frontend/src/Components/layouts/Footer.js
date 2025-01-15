import React from "react";
import '../../Styles/Components/Layouts/footer.css'

const Footer = (props) => {
    return (
        <footer>
            <div className="logos-footer">
                <p>Encontranos en:</p>
                <ul>
                <li><img src="/img/instagram-logo.png" alt="ig logo"></img></li>
                <li><img src="/img/linkedin-logo.webp" alt="ig logo"></img></li>
                <li><img src="/img/facebook-logo.png" alt="ig logo"></img></li>
                </ul>
            </div>
            <p className="copyright">Derechos Reservados. Hermes Agency 2024</p>
        </footer>
    )
}

export default Footer