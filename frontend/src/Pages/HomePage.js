import React from "react";
import '../../src/Styles/Components/Pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="/img/banner-img.png" width="100%" alt="banner"/>
            </div>
            <h2 className="text-divisor">Servicios</h2>
            <div className="card-container">
                <div className="card">  
                    <div className="card-title">Analisis de Datos</div>
                    <img src="/img/image-card1.png" className="card-img"/>
                    <div className="card-content">
                        Analizamos profundamente los datos y los transformamos en decisiones estratégicas altamente optimizadas y efectivas.
                    </div>  
                    
                    <div className="card-footer">Proximamente...</div>  
                </div>
                <div className="card">  
                    <div className="card-title">Bi y Visualización</div>
                    <img src="/img/image-card2.png" className="card-img"/>
                    <div className="card-content">
                    Creamos herramientas personalizadas que transforman datos complejos en análisis accionables, junto a tu equipo.
                    </div>  
                    
                    <div className="card-footer">Proximamente...</div>  
                </div>  
                <div className="card">  
                    <div className="card-title">Analitica Avanzada</div>
                    <img src="/img/image-card3.png" className="card-img"/>
                    <div className="card-content">
                    Optimiza decisiones y reduce costos con IA, transformando datos en valor, acción y mayor rentabilidad.
                    </div>
                    
                    <div className="card-footer">Proximamente...</div>  
                </div>
                <div className="card">  
                    <div className="card-title">Ingenieria de Datos</div>
                    <img src="/img/image-card4.png" className="card-img"/>
                    <div className="card-content">
                    Los datos son nuestro segundo idioma: construimos pipelines, data warehouses, lakes, migramos e integramos plataformas.
                    </div>
                    
                    <div className="card-footer">Proximamente...</div>  
                </div>
            </div>
            <h2 className="text-divisor">Clientes que confian en nosotros 🤩</h2>
            <div className="card-container">
                <div className="logo-container">
                    <img className="client-logo" src="/img/hrlogo.svg"  alt="Hard Rock Puerto Mader"/>
                </div>
                <div className="logo-container">
                    <img className="client-logo" src="/img/ablogo.svg" alt="Auditorio de belgrano"/>
                </div>
                <div className="logo-container">
                    <img className="client-logo" src="/img/shlogo.svg"  alt="Smilehood"/>
                </div>
            </div>
        </main>
            
)
}

export default HomePage