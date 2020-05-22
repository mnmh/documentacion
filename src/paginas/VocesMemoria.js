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
                    <h2>Voces de la memoria</h2>
                </div>
                <div id="bga-visual">
                    <h2>Voces de la memoria</h2>
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