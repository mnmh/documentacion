import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: this.props.location.pathname
        }

        this.changeInicio = this.changeInicio.bind(this)
        this.changeRuta = this.changeRuta.bind(this)
        this.changeSistema = this.changeSistema.bind(this)
        this.changeVoces = this.changeVoces.bind(this)
    }

    changeInicio() {
        this.setState({
            selected: '/'
        })
    }

    changeRuta() {
        this.setState({
            selected: '/rutas-desarrollo'
        })
    }

    changeSistema() {
        this.setState({
            selected: '/sistema-diseno'
        })
    }

    changeVoces() {
        this.setState({
            selected: '/voces-memoria'
        })
    }

    render() {
        return(
            <>
            <nav id="sideNav">
                <div className="logoMMC">
                    <svg viewBox="0 0 280 152"><g> <g class="st0"> <polygon class="st1" points="276.55,20.15 276.55,145.12 239.57,146.74 208.44,148.1 170.62,146.06 169.22,145.99 141.27,144.49 26.63,144.49 26.63,110.19 3.41,111.77 3.41,13.64 26.35,15.79 26.35,8.88 45.64,4.35 60.69,23.61 64.34,20.15 76.96,17.34 81.41,8.88 107.93,11.42 107.93,17.34 121.03,18.88 121.03,11.74 141.27,7.69 141.27,2.52 171.92,6.5 175.62,10.9 197.62,13.71 197.62,13.71 208.44,11.74 210.02,14.12 232.29,16.82 232.29,26.59 236.4,26.03 236.4,33.04 247.18,16.82 		"></polygon><polygon class="st2" points="3.41,111.77 3.41,13.64 26.35,15.79 26.35,8.88 45.64,4.35 45.64,144.48 26.63,144.48 26.63,110.19 "></polygon> <polyline class="st2" points="3.41,13.64 21.23,43.26 26.35,42.54 26.35,15.79 		"></polyline> <polyline class="st2" points="45.64,4.35 74.74,41.59 81.41,41.59 81.41,8.88 107.93,11.42 107.93,55.72 115.39,54.77 115.39,20.15 141.27,21.9 141.27,144.48 115.79,144.48 115.79,111.3 73.87,111.3 48.38,144.48 45.64,144.48 		"></polyline> <polyline class="st2" points="48.38,144.48 71.37,144.48 98.16,111.3 		"></polyline> <line class="st2" x1="115.39" y1="20.15" x2="141.27" y2="55.56"></line> <line class="st2" x1="115.39" y1="44.13" x2="107.93" y2="34.37"></line> <line class="st2" x1="68.45" y1="33.55" x2="81.41" y2="8.88"></line> <polyline class="st2" points="76.96,17.34 64.34,20.15 60.69,23.61 		"></polyline> <polyline class="st2" points="107.93,17.34 121.03,18.88 121.03,11.74 141.27,7.69 		"></polyline> <polyline class="st2" points="141.27,21.9 141.27,2.52 169.14,39.25 169.14,60.8 177.71,60.8 177.71,17.34 208.44,11.74 208.44,148.1 141.27,144.48 		"></polyline> <line class="st2" x1="189.92" y1="121.21" x2="170.62" y2="146.06"></line> <polyline class="st2" points="208.44,11.74 239.88,59.06 247.18,59.69 247.18,16.82 276.55,20.15 276.55,145.12 208.44,148.1 178.17,104.15 169.22,104.15 169.22,145.99 		"></polyline> <polyline class="st2" points="239.57,146.74 239.57,103.36 276.55,104.31 		"></polyline> <line class="st2" x1="247.18" y1="16.82" x2="229.5" y2="43.43"></line> <polyline class="st2" points="219.48,28.35 236.4,26.03 236.4,33.04 		"></polyline> <line class="st2" x1="236.4" y1="26.03" x2="226.4" y2="38.77"></line> <polyline class="st2" points="232.29,26.59 232.29,16.82 210.02,14.12 		"></polyline> <polyline class="st2" points="180.58,16.82 171.92,6.5 141.27,2.52 		"></polyline> <line class="st2" x1="197.62" y1="13.71" x2="175.62" y2="10.9"></line> <line class="st2" x1="169.14" y1="39.25" x2="177.71" y2="39.25"></line> <line class="st2" x1="71.37" y1="144.48" x2="115.79" y2="144.48"></line> </g> </g> </svg>
                </div>
                <ul className={(this.state.selected == '/') ? 'active' : ''}>
                    <Link to="/">
                        <li className="title" onClick={this.changeInicio}>El laboratorio virtual</li>
                    </Link>
                        <li>Acerca de</li>
                        <li>Créditos</li>
                </ul>
                <ul className={(this.state.selected == '/rutas-desarrollo') ? 'active' : ''}>
                    <Link to="rutas-desarrollo">
                        <li className="title" onClick={this.changeRuta}>Ruta de desarrollo colaborativo</li>
                    </Link>
                        <li>Introducción</li>
                        <li>La ruta de desarrollo</li>
                </ul>
                <ul>
                    <li className="title">Radio en vivo</li>
                </ul>
                <ul>
                    <li className="title">Cajas de memoria</li>
                </ul>
                <ul className={(this.state.selected === '/sistema-diseno') ? 'active' : ''}>
                    <Link to="sistema-diseno">
                        <li className="title" onClick={this.changeSistema}> Sistema de diseño</li>
                    </Link>
                    <li> <a href="#porque">¿Porque es necesario? </a></li>
                    <li><a href="#lenguaje-visual">Lenguaje visual </a></li>
                    <li><a href="#bloques">Bloques y componentes </a></li>
                </ul>

                <ul className={(this.state.selected === '/voces-memoria') ? 'active' : ''}>
                    <Link to="voces-memoria">
                        <li className="title" onClick={this.changeVoces}> Voces de la memoria</li>
                    </Link>
                    <li> <a href="#bga-intro"> Introducción </a></li>
                    <li> <a href="#bga-estructura"> Estructura del proyecto </a></li>
                    <li> <a href="#bga-desarrollo"> Desarrollo </a></li>
                    <li> <a href="#bga-visual"> Personalización del diseño visual </a></li>
                    <li> <a href="#bga-scripts"> Scripts de JavaScript </a></li>
                </ul>
                <ul>
                    <li className="title">Plataforma web</li>
                    <li>Sistema de bloques</li>
                    <li>Estructura de la página</li>
                </ul>
                <ul>
                    <li className="title">App colorea</li>
                </ul>
                <ul>
                    <li className="title">Visualizaciones de datos</li>
                </ul>
                <ul>
                    <li className="title">API centro de contenido</li>
                </ul>
                <ul>
                    <li className="title">API archivo de derechos humanos</li>
                </ul>
            </nav>
            </>
        )
    }
}

export default withRouter(Nav)