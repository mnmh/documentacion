import React, { Component } from "react";

import Nav from '../components/Nav'

class SistemaDiseno extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <section id="insideDoc">
                <div id="que-es">
                    <h2>Sistema de diseño de contenidos digitales del museo de memoria de Colombia</h2>
                    <p>El sistema de diseño es una colección de  patrones, componentes y herramientas reutilizables, guiados por estándares en DDHH en entornos digitales, que se entrelazan y iteran para crear contenidos digitales coherentes, consistentes y unificados con los objetivos del programa digital. Principalmente permite a los equipos crear mejores productos de manera más eficiente así como escalar el diseño para los distintos contenidos digitales. </p>
                </div>
            </section>
            </>
        )
    }
}

export default SistemaDiseno;