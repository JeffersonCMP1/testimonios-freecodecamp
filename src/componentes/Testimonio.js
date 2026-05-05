import React from "react";  
import '../hojas-de-estilo/Testimonio.css';
export default function Testimonio(){
    return(
    <div className="contenedor-testimonio">
        <img className='imagen-testimonio' src={require('../imagenes/persona1.png')}alt="Persona 1" />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
            <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
            <p className='texto-testimonio'>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.</p>
        </div>
    </div>
    )
}