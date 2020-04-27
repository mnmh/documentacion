import React, { Component } from "react";

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <nav id="sideNav">
                <ul>
                    <li className="title">Sistema de diseño</li>
                </ul>
                <ul>
                    <li className="title">Plataforma web</li>
                </ul>
                <ul>
                    <li className="title">App colorea</li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Nav