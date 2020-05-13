import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/source.scss';

import Inicio from './paginas/Inicio'
import RutasDesarrollo from './paginas/RutasDesarrollo'
import SistemaDiseno from './paginas/SistemaDiseno'
import Nav from './components/Nav'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: ''
    }

    this.onClickChangeState = this.onClickChangeState.bind(this);
  }

  onClickChangeState(state_temp) {
    
  }

  render() {
    return(
      <Router>
        <div id="container">
          <Nav selected={this.state.selected} />
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/rutas-desarrollo" exact component={RutasDesarrollo} />
            <Route path="/sistema-diseno" exact component={SistemaDiseno} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
