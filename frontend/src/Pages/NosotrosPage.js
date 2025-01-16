import React from "react";
import '../../src/Styles/Components/Pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="nosotros-container">
                <div className="historia">
                    <h1>Breve historia sobre nosotros</h1>
                    <p>
                        Hermes nació en 2023, cuando dos amigos que se conocieron trabajando en
                        Disney decidieron buscar algo más que solo un empleo. Su objetivo era
                        crear un proyecto con una cultura de trabajo relajada y amigable, donde
                        la gente se sintiera orgullosa de pertenecer a Hermes. Nos enfocamos en
                        la solución de BI y análisis de datos, contando con auténticos cracks
                        del sector, con años de experiencia en el más alto nivel. Nuestro equipo
                        está compuesto por profesionales apasionados que valoran la innovación,
                        la colaboración y el crecimiento constante. En Hermes, creemos que un
                        ambiente de trabajo positivo es clave para el éxito. Promovemos un
                        equilibrio entre la vida laboral y personal, fomentamos la creatividad y
                        apoyamos el desarrollo personal y profesional de nuestros empleados. Nos
                        esforzamos por ser un lugar donde cada miembro del equipo se sienta
                        valorado y motivado para alcanzar su máximo potencial. Nuestra misión es
                        proporcionar soluciones de BI y análisis de datos de alta calidad que
                        ayuden a nuestros clientes a tomar decisiones informadas y estratégicas.
                        Trabajamos estrechamente con nuestros clientes para entender sus
                        necesidades y ofrecerles soluciones personalizadas que impulsen su éxito
                        y crecimiento. En Hermes, estamos comprometidos con la excelencia, la
                        integridad y la innovación. Nos enorgullece ser una empresa que no solo
                        ofrece resultados excepcionales, sino que también crea un impacto
                        positivo en la vida de nuestros empleados y en la comunidad en general.
                    </p>
                </div>
                <div className="staff">
                    
                        <div className="persona">
                            <img className="persona-img" src="/img/matias-calvo.jpg" alt="matias calvo"/>
                            <h5>Matias Calvo</h5>
                            <h6>Co-Founder COO</h6>
                            <p>
                                Con multiples años de expertise en el marketing digital, creciendo negocios a +200.000€ y obteniendo experiencia en las empresas mas grandes del mundo. Matias y sus socio decidieron dar un paso hacia adelante y ofrecer un servicio 360 de Data y Analaytics
                            </p>
                        </div>
                    
                        <div className="persona">
                            <img className="persona-img" src="/img/juan-marina.jpg" alt="Juan Martin Marina"/>
                            <h5>Juan Marina</h5>
                            <h6>Co-Founder CEO</h6>
                            <p>
                            Pasando por su carrera militar, Juan decidió dar un giro en su vida y dedicarse a lo que le apasiona en verdad, Martech y Data Science. Pasando por las empresas top a nivel global, junto a las big four. Juan se asentó en Disney donde desarrolla su carrera y se convierte en uno de los mejores en su sector.
                            </p>
                        </div>
                    
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage