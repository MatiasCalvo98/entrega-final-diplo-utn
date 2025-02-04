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
            <section className="servicios-detalles">
                <h2 className="text-divisor">Más sobre nuestros servicios</h2>

                <div className="servicio-detalle">
                    <img src="/img/image-card1.png" className="servicio-img" alt="Análisis de Datos"/>
                    <div className="servicio-texto">
                        <h3>📊 Análisis de Datos</h3>
                        <p>Extraemos información clave de tus datos para que puedas tomar decisiones informadas. 
                        Utilizamos herramientas avanzadas como SQL, Python y Machine Learning para identificar patrones y optimizar estrategias de negocio.</p>
                        <ul>
                            <li>✅ Identificación de tendencias ocultas en los datos.</li>
                            <li>✅ Modelado predictivo para anticipar cambios en el mercado.</li>
                            <li>✅ Segmentación avanzada de clientes y productos.</li>
                        </ul>
                    </div>
                </div>

                <div className="servicio-detalle">
                    <img src="/img/image-card2.png" className="servicio-img" alt="BI y Visualización"/>
                    <div className="servicio-texto">
                        <h3>📈 BI y Visualización</h3>
                        <p>Transformamos datos complejos en dashboards y reportes visuales fáciles de interpretar. 
                        Nos especializamos en Power BI, Tableau y Looker para ayudarte a visualizar la información de manera efectiva.</p>
                        <ul>
                            <li>📊 Creación de dashboards personalizados para tu empresa.</li>
                            <li>📊 Reportes en tiempo real para mejorar la toma de decisiones.</li>
                            <li>📊 Integración con múltiples fuentes de datos.</li>
                        </ul>
                    </div>
                </div>

                <div className="servicio-detalle">
                    <img src="/img/image-card3.png" className="servicio-img" alt="Analítica Avanzada"/>
                    <div className="servicio-texto">
                        <h3>🧠 Analítica Avanzada</h3>
                        <p>Aplicamos modelos de Inteligencia Artificial para optimizar procesos y reducir costos. 
                        Nuestro equipo desarrolla soluciones de Machine Learning que generan valor a largo plazo.</p>
                        <ul>
                            <li>🧠 Algoritmos de predicción y clasificación.</li>
                            <li>🧠 Automatización de procesos analíticos.</li>
                            <li>🧠 Optimización de estrategias comerciales basadas en datos.</li>
                        </ul>
                    </div>
                </div>

                <div className="servicio-detalle">
                    <img src="/img/image-card4.png" className="servicio-img" alt="Ingeniería de Datos"/>
                    <div className="servicio-texto">
                        <h3>🔗 Ingeniería de Datos</h3>
                        <p>Construimos arquitecturas de datos sólidas y escalables para tu empresa. 
                        Desarrollamos soluciones de integración y almacenamiento de datos para optimizar el flujo de información.</p>
                        <ul>
                            <li>🔗 Implementación de Data Warehouses y Lakes.</li>
                            <li>🔗 Creación de pipelines ETL para transformar datos.</li>
                            <li>🔗 Migración de datos entre plataformas con seguridad y eficiencia.</li>
                        </ul>
                    </div>
                </div>
            </section>
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