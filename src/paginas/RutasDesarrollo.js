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
                                <p>Se convoca a las áreas involucradas en el desarrollo del producto virtual para plantear ideas y presentar el contenido disponible. El contenido puede ser de cualquier tipo y su tipología influirá directamente en el producto final. Por eso es importante que desde los equipos se organice el material y se piense desde ahí los productos a realizar.</p>
                                <p>La tipología puede ser un texto, imágen, video, audio, líneas de tiempo, datos, etc...</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">2</div>
                            <div className="contenido">
                                <p>Teniendo como insumo la actividad número uno el equipo virtual, realiza el planteamiento del esquema del producto de acuerdo a la tipología del contenido. Se presentan distintas posibilidades para visibilizar o explorar.</p>
                                <p>Convoca a las áreas involucradas a una sesión de presentación y retroalimentación de la estructura de la información y navegación del producto.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">3</div>
                            <div className="contenido">
                                <p>Con base al guion, la estructura de la información y en articulación con las áreas involucradas, se proyectan y se describen minuciosamente los requerimientos funcionales del producto.</p>
                                <p>Se describe el alcance tecnológico y la experiencia de usuario.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">4</div>
                            <div className="contenido">
                                <p>Partiendo de los requerimientos funcionales, la estructura de la información, la navegación de la experiencia de usuario, el laboratorio trabaja en una primera versión de un mockup.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">5</div>
                            <div className="contenido">
                                <p>Se convoca a una reunión con las áreas involucradas para presentarles la versión del mockup y recibir retroalimentación.</p>
                                <p>Si este es aprobado se avanza al desarrollo de un prototipo funcional.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">6</div>
                            <div className="contenido">
                                <p>Se convoca a una reunión con las áreas involucradas para presentarles la versión del prototipo y recibir retroalimentación.</p>
                                <p>Si este es aprobado se avanza al desarrollo del producto final.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">7</div>
                            <div className="contenido">
                                <p>Se despliega la primera versión del producto para las primeras pruebas de usuario y se hacen los ajustes según las necesidades. Desde este punto el producto ya puede entrar a una fase beta de pruebas y cuando ya está aprobado se puede publicar.</p>
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