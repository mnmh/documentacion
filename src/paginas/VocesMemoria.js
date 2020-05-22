import React, { Component } from "react";

import Nav from '../components/Nav'

class VocesMemoria extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <section id="insideDoc">
                
                <div id="bga-intro">
                    <h2>Voces de la memoria</h2>
                    <img src="imagenes/voces/01.jpg" />
                    <p>
                    Voces de la memoria es un formato de curaduría web de obras de artistas que tratan temas relacionados al conflicto armado y a la memoria histórica en Colombia. 
                    <br/>
                    <br/>
                    En estos especiales, los artistas narran historias sobre su obra a la vez quevoces se dibujan imágenes en la pantalla para complementar la narrativa. El primer especial de la serie Voces de la memoria corresponde a una curaduría digital de 5 obras de Beatriz González. 
                    <br/>
                    <br/>
                    En este documento se encuentra consignada la información para crear un especial similar a partir del código para la primera curaduría.
                    <br/>
                    <br/>
                    El repositorio de este proyecto se puede consultar en <a className="link" href="https://github.com/mnmh/curaduria-bga">Github</a>

                    </p>
                </div>
                <div id="bga-estructura">
                    <h2>Estructura del proyecto:</h2>

                    <p>Carpeta raíz:</p>
                    <ul>
                        <li>├── index.js  <b>#Archivo para el servidor de desarrollo</b> </li>
                        <li>├── node_modules/ <b>#Carpeta con los paquetes de node.js </b> </li>
                        <li>├── package-lock.json   <b>#Historial de cambios a node_modules o package.json</b> </li>
                        <li>├── package.json  <b> #Archivo de configuración del proyecto </b></li>
                        <li>├── public/   <b>Carpeta #Archivos del especial web</b> </li>
                        <li>├── scss/   <b>#Archivos de estilo sass</b> </li>
                    </ul>

                    <p>Carpeta public:</p>
                    <ul>
                        <li>├── audio/ <b>  #archivos de audio</b> </li>
                        <li>├── img/  <b>#archivos de imagen </b> </li>
                        <li>├── fonts/    <b> #fuentes del proyecto</b> </li>
                        <li>├── svg/   <b> #archivos svg </b></li>
                        <li>├── js/   <b>scripts y librerías de javascript</b> </li>
                        <li>├── index.html   <b>#página de inicio</b> </li>
                        <li>├── sobre.html  <b> #página de información del proyecto</b> </li>
                        <li>├── auras.html  <b>  #página de obra</b> </li>
                        <li>├── tumulo.html  <b>  #página de obra</b> </li>
                        <li>├── delicias.html  <b>  #página de obra</b> </li>
                        <li>├── presidente.html  <b>  #página de obra</b> </li>
                        <li>├── ensayo.html  <b>  #página de obra</b> </li>
                    </ul>
                </div>
                <div id="bga-desarrollo">
                    <h2>Scripts para el desarrollo</h2>
                    <ul>
                        <li> <b>1. Instalar node.js </b></li>
                        <li><b>2. Clonar repositorio: </b> git clone https://github.com/mnmh/curaduria-bga.git</li>
                        <li><b>3. Instalar las dependencias: </b> npm install</li>
                        <li><b>4. Compilar css una vez:</b>  npm run css </li>
                        <li><b>5. Compilar css cada vez que se realicen cambios:</b> npm run watch</li>
                        <li><b>6. Arrancar un servidor local: </b> node index.js</li>
                    </ul>
                </div>
                <div id="bga-visual">
                    <h2>Personalización del diseño visual</h2>
                    <p>Estas son las instrucciones para cambiar la apariencia visual del especial</p>

                    {/*Tipografía*/}
                    <h2>Tipografía</h2>
                    <p>
                        Para modificar las tipografías utilizadas en el especial primero se deben agregar los archivos a la carpeta <b>fonts/</b>. En segundo lugar se deben agregar los enlaces a las fuentes en el archivo <b>scss/estilos.scss</b>. Finalmente en el archivo scss reemplazar las variables <b>$fuente-titulos</b> y <b>$fuente-textos</b> por las tipografías a utilizar
                    </p>
                    <img src="imagenes/voces/02.png" />

                    {/*Color*/}
                    <h2>Color</h2>
                    <p>
                        Para modificar los colores utilizadas en el especial basta con reemplazar las variables <b> $primario</b>, <b>$secundario</b> y <b>$fondo</b> en el archivo <b>scss/estilos.scss</b>.
                    </p>
                    <img src="imagenes/voces/03.png" />

                    {/*Audio*/}
                    <h2>Reproductor de Audio</h2>
                    <p>
                    Para reemplazar los botones del reproductor de audio hay que reemplazar los archivos <b>next.svg</b>, <b>pause.svg</b>, <b>play.svg</b>, <b>prev.svg</b> de la carpeta <b>svg/</b>
                    </p>
                    <img src="imagenes/voces/04.png" />

                    {/*Ilustraciones*/}
                    <h2>Ilustraciones</h2>
                    <p>
                    Para el funcionamiento de las funcionalidades del especial, cada ilustración debe ser <b> un único path en formato svg</b> cuyo código se pega directamente en el html del especial. Para construir las ilustraciones se puede usar un software como illustrator.ai, figma, adobe.xd, etc. 
                    </p>
                    <img src="imagenes/voces/05.png" />
                    <img src="imagenes/voces/06.png" />

                    {/*Home*/}
                    <h2>Home</h2>
                    <div className="listado">
                        <div className="item btm">
                            <div className="num">1</div>
                            <div className="contenido">
                                <p><b>Ilustración principal</b></p>
                                <br/>
                                <p>
                                En la página index.html buscar el tag <b>section</b> con clases <b>.hero</b> e <b>.inicio</b> y reemplazar el código svg al interior de esta sección
                                </p>
                            </div>
                        </div>

                        <div className="item btm">
                            <div className="num">2</div>
                            <div className="contenido">
                                <p><b>Ilustraciones Menú</b></p>
                                <br/>
                                <p>
                                En la página index.html buscar el tag <b>section</b> con clase <b>.menu</b>. Aquí encontrará una lista con 5 enlaces, reemplace el código svg con el de sus ilustraciones
                                </p>
                            </div>
                        </div>

                        <div className="item btm">
                            <div className="num">3</div>
                            <div className="contenido">
                                <p><b>Animaciones css</b></p>
                                <br/>
                                <p>
                                Después de remplazar las ilustraciones en el Home, se deben ajustar las animaciones en css
                                </p>
                                <img src="imagenes/voces/07.png" />
                                <img src="imagenes/voces/08.png" />
                            </div>
                        </div>
                    </div>

                    {/*Página de obra*/}
                    <h2>Página de obra</h2>
                    <div className="listado">
                        <div className="item btm">
                            <div className="num">1</div>
                            <div className="contenido">
                                <p><b>Ilustración principal</b></p>
                                <br/>
                                <p>
                                En la página index.html buscar el tag <b>section</b> con clases <b>.hero</b> e <b>.inicio</b>reemplazar el código svg al interior de esta sección
                                </p>
                            </div>
                        </div>

                        <div className="item btm">
                            <div className="num">2</div>
                            <div className="contenido">
                                <p><b>Audio</b></p>
                                <br/>
                                <p>
                                    Buscar el tag <b>audio</b> y reemplazar la ruta al archivo de  audio
                                </p>
                            </div>
                        </div>

                        <div className="item btm">
                            <div className="num">3</div>
                            <div className="contenido">
                                <p><b>Sección dibujo</b></p>
                                <br/>
                                <p>
                                    En esta sección se encuentran los subtítulos del audio, las imágenes y los parámetros para que el código funcione correctamente.
                                </p>
                                <img src="imagenes/voces/09.png" />
                            </div>
                        </div>

                        <div className="item btm">
                            <div className="num">4</div>
                            <div className="contenido">
                                <p><b>Contexto histórico</b></p>
                                <br/>
                                <p>
                                Buscar el tag <b>section</b> con clase <b>.contexto</b> y reemplazar el texto
                                </p>
                            </div>
                        </div>

                        <div className="item btm">
                            <div className="num">5</div>
                            <div className="contenido">
                                <p><b>Galería de imágenes</b></p>
                                <br/>
                                <p>
                                    Para cada una de las imagénes en el tag <b>section</b> con clase <b>.galería</b> reemplazar:
                                </p>
                                <img src="imagenes/voces/10.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="bga-scripts">
                    <h2>Scripts de javascript</h2>

                    <div className="listado">
                        <div className="item btm">
                            <div className="num">1</div>
                            <div className="contenido">
                                <p> <b>modal.js</b> </p>
                                
                                <p>
                                    Este es el script que maneja la funcionalidad de la galería de imágenes.
                                </p>
                                <p>
                                    Cada vez que se hace clic en una de los tags <b>a</b> de la galería, se muestra un div de clase <b>.modal</b> que tiene propiedad de display:none en la página de obra. Adicional a esto, dentro del modal se visualiza todo el contenido del tag a, es decir, la imagen y el texto que se encuentre en su interior.
                                </p>
                                <img src="imagenes/voces/11.png" />
                                <p>
                                    Para cerrar el modal y volver a la galería basta con hacer clic en el div con clase .modal-close.
                                </p>
                                <img src="imagenes/voces/12.png" />
                            </div>
                        </div>
                    </div>

                    <div className="listado">
                        <div className="item btm">
                            <div className="num">1</div>
                            <div className="contenido">
                                <p> <b>script.js</b> </p>
                                
                                <p>
                                Este es el script que maneja la funcionalidad de control de audio y animación de ilustraciones en las páginas de obra.

                                </p>
                                <p>
                                    En primer lugar se declaran las variables necesarias para el funcionamiento del script:
                                </p>
                                <p>
                                    Se crearon funciones para controlar la reproducción del audio:
                                </p>
                                <p>
                                    Existe también una función para que el audio se reproduzca automáticamente cuando el usuario haga scroll en la página:
                                </p>
                                <p>
                                    Las siguientes funciones se encargan de la posibilidad de avanzar o retroceder entre secciones:
                                </p>
                                <p>
                                    Finalmente, para realizar la animación del path existen 3 pasos: primero, crear una variable donde se guarda la animación:
                                </p>

                                <p>Luego, preparar el css de animación del path</p>
                                <p>y por último, llamar a la animación en la función <b>updateValues()</b></p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            </>
        )
    }
}

export default VocesMemoria;