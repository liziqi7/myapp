import React, { Component } from 'react';
// import B from './components/b'
// import C from './components/c'
// import E from './components/e'
import Menu from "./menu/menu"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Menu routeMap={this.props.routeMap} />   
        <div className="main">   
         {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
