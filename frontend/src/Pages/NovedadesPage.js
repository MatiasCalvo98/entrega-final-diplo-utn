import React, { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../Components/novedades/NovedadItem";
import '../../src/Styles/Components/Pages/NovedadesPage.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');

            const novedadesTransformadas = response.data.map(novedad => ({
                ...novedad,
                id: novedad["id-post"] 
            }));

            setNovedades(novedadesTransformadas);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => (
                    <NovedadItem 
                        key={item.id} 
                        title={item.titulo} 
                        subtitle={item.subtitulo}
                        body={item.cuerpo} 
                        imagen={item.imagen} 
                    />
                ))
            )}
        </section>
    );
};

export default NovedadesPage;
