import React, { Component } from "react";

import Nav from '../components/Nav'

class RutasDesarrollo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <section id="insideDoc">
                <div id="intro">
                    <h2>Introducción</h2>
                    <p>Este procedimiento describe los pasos a seguir para el desarrollo de un aplicativo en sintonía con los otros equipos de la dirección. Esta ruta se propone en miras a una mejor planeación y coordinación entre el laboratorio y los equipos, teniendo en cuenta la importancia de que el laboratorio pueda trabajar con las demás áreas y hacer comprensible para ellas la metodología de trabajo del equipo de desarrollo.</p>
                </div>
                <div id="rutas">
                    <h2>La ruta de desarrollo</h2>

                    <div className="listado">
                        <div className="item">
                            <div className="num">1</div>
                            <div className="contenido">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default RutasDesarrollo;