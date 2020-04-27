import React, { Component } from "react";

import Nav from '../components/Nav'

class Inicio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <div id="container">
                <Nav />
                <section id="insideDoc">
                    
                </section>
            </div>
            </>
        )
    }
}

export default Inicio