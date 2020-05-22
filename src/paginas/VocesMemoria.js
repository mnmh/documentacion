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
                    {/* Imagen inicio */}
                    <p>
                    Voces de la memoria es un formato de curaduría web de obras de artistas que tratan temas relacionados al conflicto armado y a la memoria histórica en Colombia. 
                    <br/>
                    <br/>
                    En estos especiales, los artistas narran historias sobre su obra a la vez que se dibujan imágenes en la pantalla para complementar la narrativa. El primer especial de la serie Voces de la memoria corresponde a una curaduría digital de 5 obras de Beatriz González. 
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

                    {/*Color*/}
                    <h2>Color</h2>
                    <p>
                        Para modificar los colores utilizadas en el especial basta con reemplazar las variables <b> $primario</b>, <b>$secundario</b> y <b>$fondo</b> en el archivo <b>scss/estilos.scss</b>.
                    </p>

                    {/*Audio*/}
                    <h2>Reproductor de Audio</h2>
                    <p>
                    Para reemplazar los botones del reproductor de audio hay que reemplazar los archivos <b>next.svg</b>, <b>pause.svg</b>, <b>play.svg</b>, <b>prev.svg</b> de la carpeta <b>svg/</b>
                    </p>

                    {/*Ilustraciones*/}
                    <h2>Ilustraciones</h2>
                    <p>
                    Para el funcionamiento de las funcionalidades del especial, cada ilustración debe ser <b> un único path en formato svg</b> cuyo código se pega directamente en el html del especial. Para construir las ilustraciones se puede usar un software como illustrator.ai, figma, adobe.xd, etc. 
                    </p>



                    {/*<div className="listado">
                    <div className="item btm">
                            <div className="num">1</div>
                            <div className="contenido">
                            <p>Tipografía</p>

                            </div>
                        </div>

                    </div> */}

                </div>
                <div id="bga-scripts">
                    <h2>Voces de la memoria</h2>
                </div>
            </section>
            </>
        )
    }
}

export default VocesMemoria;