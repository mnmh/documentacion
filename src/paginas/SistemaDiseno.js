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

                <div id="porque">
                    <h2>¿Porque es necesario un sistema de diseño?</h2>
                    <p> <b> Control de la representación:</b> Cuando se diseña a corto plazo y para problemas específicos empieza a aparecer una sobreabundancia de estilos y convenciones que se convierten  en imposibles de mantener para futuros productos. Un sistema de diseño, provee soluciones que son transversales a los diferentes productos digitales de manera que lo que se desarrolla una vez puede ser utilizado en múltiples ocasiones.</p>  

                    <p> <b> Control de la representación:</b> Cuando se diseña a corto plazo y para problemas específicos empieza a aparecer una sobreabundancia de estilos y convenciones que se convierten  en imposibles de mantener para futuros productos. Un sistema de diseño, provee soluciones que son transversales a los diferentes productos digitales de manera que lo que se desarrolla una vez puede ser utilizado en múltiples ocasiones.</p> 

                    <p> <b>Sistema central actualizado: </b>componentes estandarizados y utilizados constantemente crean una interfaz fácil de leer y navegar para el usuario. Además permite a los diseñadores preocuparse menor por el diseño de estilos y enfocarse más en la experiencia de usuario.</p> 

                    <p> <b> Prototipado e iteración rápida:</b> un sistema de diseño provee una librería de bloques y recursos visuales a disposición del equipo para experimentar y crear prototipos mucho más rápido. De la misma manera es posible hacer iteraciones de estilo en los productos existentes de forma más eficiente ya que la actualización de algún componente se refleja inmediatamente en todos los productos digitales.</p> 

                    <p> <b> Accesibilidad y usabilidad:</b> Al diseñar desde el nivel de componentes se reduce la cantidad de código  (css y javascript)  necesario en un contenido digital, en consecuencia los productos son optimizados para personas con conexiones a internet lentas o computadores viejos.</p> 
                </div>
            </section>
            </>
        )
    }
}

export default SistemaDiseno;