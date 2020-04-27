import React, { Component } from "react";

import Nav from '../components/Nav'

class Inicio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <section id="insideDoc">
                <div id="acercade">
                    <h2>Acerca de</h2>
                    <p>El laboratorio virtual es un espacio donde se combina el diseño de experiencias y estrategias digitales con prácticas artísticas y culturales en memoria histórica y derechos humanos, utilizando tecnologías emergentes y plataformas digitales. Funciona a partir de dos tipos de estrategias: la primera se centra en gestionar y expandir el legado del CNMH con proyectos como el Centro de contenido, el Observatorio de Memoria y Conflicto, el Archivo virtual de los Derechos Humanos y Alfabetizaciones Digitales. La segunda, implementa el programa digital del Museo.</p>
                    <p>En esta sección de la plataforma podrá encontrar la documentación de los productos digitales y de las APIs públicas, sus distintas aplicaciones en diferentes entornos y la sistematización de los procesos para su desarrollo en equipo.</p>
                    <p>El laboratorio virtual publica sus desarrollos en la plataforma github y son de caráter abierto y libre:</p>
                    <a href="https://github.com/mnmh" className="link">Repositorio público en github</a>
                </div>
                <div id="creditos">
                    <h2>Créditos</h2>
                    <p>Actualmente el laboratorio está compuesto por un equipo interdisciplinarios, con el objetivo de crear las experiencias digitales del Museo de Memoria de Colombia:</p>
                    <ul>
                        <li><b>Néstor Andrés Peña:</b> líder del laboratorio virtual</li>
                        <li><b>Laura Junco:</b> diseño digital</li>
                        <li><b>Diego Corzo:</b> diseño editorial</li>
                        <li><b>Angela Eraso:</b> gestión de la colección digital</li>
                    </ul>
                    <p>También agradecemos a las personas que han estado en el equipo y han hecho valiosos aportes al trabajo del laboratorio:</p>
                    <ul>
                        <li>Juan Carlos Vargas</li>
                        <li>Santiago Moreno</li>
                        <li>Natalia Mustafá</li>
                        <li>Diego Acosta</li>
                    </ul>
                </div>
            </section>
            </>
        )
    }
}

export default Inicio