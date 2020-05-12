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
                    <img src="imagenes/00_crimson.png" />


                    <p><b>Para cuerpo de texto::</b> <br/>
                    Fuente Crimson @googlefonts diseñada por Jacques Le Bailly </p>
                    <img src="imagenes/00_inter.png" />

                </div>

                <div id="bloques">
                    <h2>Bloques y componentes</h2>
                    <p> Los <b> bloques </b> son porciones de código reutilizables con las cuales se generan los bloques que construyen una interfaz. Los componentes deben ser lo más reutilizables posible, ya que esto reduce el mantenimiento necesario y la posibilidad de escalar el sistema. </p> 

                    <div className="listado">
                        <div className="item">
                            <div className="num">1</div>
                            <div className="contenido">
                                <p> <b> Banners / Banner Carrusel </b>  <br/>
                                    <b> Nombre: </b> bloque-banner-carrousel-margenes 
                                    <br/>
                                    <b>Descripción: </b> Un banner con un carrusel en el cual las imágenes de cada slide tienen márgenes que dejan ver el color de fondo. 
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título (campo) <br/>
                                    B. Subtítulo (campo) <br/>
                                    C. Descripción (campo) <br/>
                                    D. Botón <br/>
                                    E. Imagen 1120 x 570px (campo) <br/>
                                    F. Color de Fondo <br/>
                                    G. Flechas de navegación
                                </p>
                            </div>
                        </div>
                    

                        <div className="item">
                            <div className="num">2</div>
                            <div className="contenido">
                                <p> <b> Banners / Banner con texto </b>  <br/>
                                    <b> Nombre: </b> bloque-banner-texto
                                    <br/>
                                    <b>Descripción: </b> Un banner con una imagen que ocupa todo el espacio de fondo, un texto descriptivo y un botón.
 
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen de fondo 2250 x 840px (campo) <br/>
                                    B. Título (campo) <br/>
                                    C. Descripción (campo) <br/>
                                    D. Botón (campo)
                                </p>
                            </div>
                        </div>


                        <div className="item">
                            <div className="num">3</div>
                            <div className="contenido">
                                <p> <b> Banners / Banner columna </b>  <br/>
                                    <b> Nombre: </b> slider-dos-columnas .full
                                    <br/>
                                    <b>Descripción: </b>Un banner que se divide en dos columnas: un bloque de color plano con un texto descriptivo y una imagen
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título (campo) <br/>
                                    B. Subtítulo (campo) <br/>
                                    C. Botones a redes sociales <br/>
                                    D. Bloque de color plano (campo) <br/>
                                    E. Imagen 1250 x 975 px (campo)

                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">4</div>
                            <div className="contenido">
                                <p> <b> Banners / Banner flotante </b>  <br/>
                                    <b> Nombre: </b> slider-slider-dos-columnas .full .half
                                    <br/>
                                    <b>Descripción: </b> Un banner que se divide en dos columnas: un bloque de color
                                    plano con un texto descriptivo y una imagen flotante.

                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título (campo) <br/>
                                    B. Subtítulo (campo) <br/>
                                    C. Descripción (campo) <br/>
                                    D. Botones a redes sociales <br/>
                                    E. Imagen 810 x 640px (campo) <br/>
                                    F. Color de fondo (campo) <br/>
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">5</div>
                            <div className="contenido">
                                <p> <b> Banners / Header columna </b>  <br/>
                                    <b> Nombre: </b> bloque-header-columna
                                    <br/>
                                    <b>Descripción: </b> Un banner con dos columnas para mostrar un texto y una imagen
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Color sólido <br/>
                                    B. Texto (campo) <br/>
                                    C. Imagen 780 x 600px (campo) <br/>
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">6</div>
                            <div className="contenido">
                                <p> <b> Banners / Banner audio </b>  <br/>
                                    <b> Nombre: </b> bloque-personajes
                                    <br/>
                                    <b>Descripción: </b> Bloque que despliega tres tarjetas, cada una con un audio. Incluye un reproductor con tiempo para la reproducción.

                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 260 x 342 px (campo) <br/>
                                    B. Botón <br/>
                                    C. Título (campo) <br/>
                                    D. Descripción (campo) <br/>
                                    E. Reproductor <br/>
                                    F. Bloque de color <br/>
                                    G. Audio (campo)
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="num">7</div>
                            <div className="contenido">
                                <p> <b> Carruseles / Carrusel columna </b>  <br/>
                                    <b> Nombre: </b> slider-dos-columnas
                                    <br/>
                                    <b>Descripción: </b> Un carrusel en el que cada slide se divide en dos columnas: un bloque de color plano con un texto descriptivo y una imagen.
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título (campo) <br/>
                                    B. Subtítulo (campo) <br/>
                                    C. Enlace (campo) <br/>
                                    D. Imagen 1250 x 975 px (campo) <br/>
                                    E. Bloque de color (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">8</div>
                            <div className="contenido">
                                <p> <b> Carruseles / Carrusel botones </b>  <br/>
                                    <b> Nombre: </b> carrousel-botones
                                    <br/>
                                    <b>Descripción: </b> Un carrusel con botones verticales y enlace interno que van hasta el margen de la pantalla


                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 400 x 450px (campo) <br/>
                                    B. Botón <br/>
                                    C. Título (campo) <br/>
                                    D. Subtítulo (campo) <br/>
                                    E. Botones de navegación
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">9</div>
                            <div className="contenido">
                                <p> <b> Carruseles / Carrusel tarjetas verticales </b>  <br/>
                                    <b> Nombre: </b> carrousel-verticales
                                    <br/>
                                    <b>Descripción: </b>  Un carrusel de tarjetas verticales que se desbordan hacia el margen derecho de la pantalla
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 515 x 700px (campo) <br/>
                                    C. Título (campo) <br/>
                                    D. Subtítulo (campo)
                                </p>
                            </div>
                        </div>


                        <div className="item">
                            <div className="num">10</div>
                            <div className="contenido">
                                <p> <b> Carruseles / Carrusel equipo </b>  <br/>
                                    <b> Nombre: </b> bloque-equipo
                                    <br/>
                                    <b>Descripción: </b> Un carrusel con tarjetas utilizado para mostrar perfiles de personas
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 300 x 400 px (campo) <br/>
                                    C. Título (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">11</div>
                            <div className="contenido">
                                <p> <b> Carruseles / Galería carrusel </b>  <br/>
                                    <b> Nombre: </b> galeria-carrousel
                                    <br/>
                                    <b>Descripción: </b>  Un carrusel que permite mostrar una galería de imágenes y una descripción
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 700 x 500px (campo) <br/>
                                    B. Título (campo) <br/>
                                    C. Descripción (campo) <br/>
                                    D. Botones de navegación
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">12</div>
                            <div className="contenido">
                                <p> <b> Carruseles / Carrusel cifras </b>  <br/>
                                    <b> Nombre: </b> cifra
                                    <br/>
                                    <b>Descripción: </b>  Un Bloque para mostrar tres cifras
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Cifra (campo) <br/>
                                    B. Subtítulo (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">13</div>
                            <div className="contenido">
                                <p> <b> Tarjetas / Tarjetas destacadas </b>  <br/>
                                    <b> Nombre: </b> destacados-cc
                                    <br/>
                                    <b>Descripción: </b>  Un bloque para mostrar 2 contenidos destacados
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 780 x 450px (campo) <br/>
                                    B. Título (campo) <br/>
                                    C. Subtítulo (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">14</div>
                            <div className="contenido">
                                <p> <b> Tarjetas / Tarjetas galerías </b>  <br/>
                                    <b> Nombre: </b> listado-noticias
                                    <br/>
                                    <b>Descripción: </b>  Despliega una lista de tarjetas organizadas en cuadrícula de 4x4
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 385 x 250px (campo) <br/>
                                    B. Título (campo) <br/>
                                    C. Descripción (campo) <br/>
                                    D. Botón “Ver todas” (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">15</div>
                            <div className="contenido">
                                <p> <b> Tarjetas / Galería con filtro </b>  <br/>
                                    <b> Nombre: </b> listado-noticias
                                    <br/>
                                    <b>Descripción: </b>  Despliega una lista de tarjetas organizadas en cuadrícula de 4x4. Se pueden filtrar los contenidos
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 385 x 250px (campo) <br/>
                                    B. Título (campo) <br/>
                                    C. Descripción (campo) <br/>
                                    D. Filtros (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">16</div>
                            <div className="contenido">
                                <p> <b> Tarjetas / Tarjetas arte y cultura </b>  <br/>
                                    <b> Nombre: </b> page-obras
                                    <br/>
                                    <b>Descripción: </b>  Un bloque con tarjetas que muestra todas las entradas de Arte y Cultura. Se puede filtrar por tipología de obra y por autor.

                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Tarjetas <br/>
                                    B. Título <br/>
                                    C. Autores <br/>
                                    D. Tipo de obra <br/>
                                    E. Filtros <br/>
                                    F. Botón “Ver más”
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">17</div>
                            <div className="contenido">
                                <p> <b> Tarjetas / Tres botones </b>  <br/>
                                    <b> Nombre: </b> tres-botones
                                    <br/>
                                    <b>Descripción: </b> Despliega tres botones de color plano con texto superpuesto
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Bloque de color plano <br/>
                                    B. Título (campo) <br/>
                                    C. Enlace (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">18</div>
                            <div className="contenido">
                                <p> <b> Tarjetas / Tres botones v2 </b>  <br/>
                                    <b> Nombre: </b> tres-botones-segunda
                                    <br/>
                                    <b>Descripción: </b> Despliega tres botones 
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Imagen 520 x 390px (campo) <br/>
                                    B. Botón <br/>
                                    C. Descripción (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">19</div>
                            <div className="contenido">
                                <p> <b> Otros bloques / Título bloque </b>  <br/>
                                    <b> Nombre: </b> titulo-modulo
                                    <br/>
                                    <b>Descripción: </b> Bloque para visualizar el título de un bloque
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título (campo) <br/>
                                    B. Subtítulo (campo)
                                </p>
                            </div>
                        </div>


                        <div className="item">
                            <div className="num">20</div>
                            <div className="contenido">
                                <p> <b> Otros bloques / Título módulo </b>  <br/>
                                    <b> Nombre: </b> titulo-modulo .center
                                    <br/>
                                    <b>Descripción: </b> Bloque para visualizar el título de un módulo
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título (campo) <br/>
                                    B. Subtítulo (campo)
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="num">21</div>
                            <div className="contenido">
                                <p> <b> Otros bloques / Calendario </b>  <br/>
                                    <b> Nombre: </b> bloque-bloque-agenda
                                    <br/>
                                    <b>Descripción: </b> Despliega un calendario y muestra los eventos que están por venir
                                </p>

                                {/* Aquí va la imagen de cada bloque */}

                                <p>
                                    <b>Anatomía:</b>
                                    <br/>
                                    A. Título mes <br/>
                                    B. Cuadrícula días <br/>
                                    C. Eventos por venir
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default SistemaDiseno;