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
                    <h2>Sistema de diseño de contenidos digitales del Museo de Memoria de Colombia</h2>
                    <p>El sistema de diseño es una colección de  patrones, componentes y herramientas reutilizables, guiados por estándares en DDHH en entornos digitales, que se entrelazan y iteran para crear contenidos digitales coherentes, consistentes y unificados con los objetivos del programa digital. Principalmente permite a los equipos crear mejores productos de manera más eficiente así como escalar el diseño para los distintos contenidos digitales. </p>
                </div>

                <div id="porque">
                    <h2>¿Porque es necesario un sistema de diseño?</h2>
                    <p> <b> Control de la representación: </b> Cuando se diseña a corto plazo y para problemas específicos empieza a aparecer una sobreabundancia de estilos y convenciones que se convierten  en imposibles de mantener para futuros productos. Un sistema de diseño, provee soluciones que son transversales a los diferentes productos digitales de manera que lo que se desarrolla una vez puede ser utilizado en múltiples ocasiones.</p>  

                    <p> <b> Sistema central actualizado: </b> un sistema de diseño crea un lugar centralizado y constantemente actualizado donde los miembros del equipo pueden consultar y seguir las guías y estándares establecidos. Esto es especialmente importante para equipos distribuidos o que cambien constantemente.</p> 

                    <p> <b> Interfaz predecible y fácil de entender: </b>componentes estandarizados y utilizados constantemente crean una interfaz fácil de leer y navegar para el usuario. Además permite a los diseñadores preocuparse menor por el diseño de estilos y enfocarse más en la experiencia de usuario.</p> 

                    <p> <b> Prototipado e iteración rápida:</b> un sistema de diseño provee una librería de bloques y recursos visuales a disposición del equipo para experimentar y crear prototipos mucho más rápido. De la misma manera es posible hacer iteraciones de estilo en los productos existentes de forma más eficiente ya que la actualización de algún componente se refleja inmediatamente en todos los productos digitales.</p> 

                    <p> <b> Accesibilidad y usabilidad:</b> al diseñar desde el nivel de componentes se reduce la cantidad de código  (css y javascript)  necesario en un contenido digital, en consecuencia los productos son optimizados para personas con conexiones a internet lentas o computadores viejos.</p> 
                </div>
                <div id="lenguaje-visual">
                    <h2>Lenguaje visual</h2>
                    <p>El lenguaje visual define el propósito, estilo y forma de uso de los elementos gráficos en los productos virtuales.</p>

                    {/* Color */}
                    <h2>Color</h2>
                    <p><b>Colores principales:</b> <br/>
                    Azul: #225DDC
                    <br/>
                    Amarillo: #FEB639
                    </p>

                    <p><b>Tonos grises:</b> <br/>
                    Gris oscuro: #3B3B3B
                    <br/>
                    Gris claro: #9A9A9A
                    </p>

                    <p><b>Otros colores:</b> <br/>
                    Turquesa: #00AE9D
                    <br/>
                    Verde: #00A650
                    <br/>
                    Naranja: #F57F29
                    </p>

                    {/* Tipografía */}
                    <h2>Tipografía</h2>
                    <p><b>Para títulos y encabezados:</b> <br/>
                    <a></a>Fuente Inter @googlefonts diseñada por Rasmus Anderson </p>

                    <p><b>Para cuerpo de texto::</b> <br/>
                    Fuente Crimson @googlefonts diseñada por Jacques Le Bailly </p>

                </div>

                <div id="bloques">
                    
                </div>
            </section>
            </>
        )
    }
}

export default SistemaDiseno;