import React from "react";
import '../../src/Styles/Components/Pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="nosotros-container">
                <div className="historia">
                    <h1>Conocé Nuestra Historia</h1>
                    <p>
                        Hermes nació en 2023, cuando dos amigos que se conocieron trabajando en Disney decidieron 
                        emprender su propio camino. Su objetivo era construir una empresa con una cultura de trabajo 
                        relajada y amigable, donde las personas se sintieran motivadas y orgullosas de pertenecer.  
                        <br/><br/>
                        Con un equipo de expertos en BI y Análisis de Datos, hemos desarrollado soluciones que permiten 
                        a las empresas tomar mejores decisiones estratégicas. En Hermes, combinamos tecnología, 
                        innovación y creatividad para transformar los datos en oportunidades.
                    </p>
                </div>
                
                <h2 className="text-divisor">Nuestro Equipo</h2>
                <div className="staff">
                    <div className="persona">
                        <img className="persona-img" src="/img/matias-calvo.jpg" alt="Matías Calvo"/>
                        <h5>Matías Calvo</h5>
                        <h6>Co-Founder | COO</h6>
                        <p>
                            Especialista en Marketing Digital y Estrategia Comercial. Con más de 10 años de experiencia,
                            ha llevado negocios a facturar más de 200.000€ anuales. Su enfoque en analítica y optimización
                            de datos ha sido clave en el crecimiento de múltiples empresas.
                        </p>
                    </div>

                    <div className="persona">
                        <img className="persona-img" src="/img/juan-marina.jpg" alt="Juan Marina"/>
                        <h5>Juan Marina</h5>
                        <h6>Co-Founder | CEO</h6>
                        <p>
                            Apasionado por la tecnología y el análisis de datos. Con una carrera en Disney y las Big Four, 
                            Juan ha desarrollado su experiencia en MarTech y Data Science, impulsando estrategias 
                            innovadoras para empresas líderes a nivel global.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage;