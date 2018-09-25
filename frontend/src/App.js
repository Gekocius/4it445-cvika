import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const InputWithLabel = ({label}) =>(
  <div>
    <label>{label}:</label>
    <input type = "text"/>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <InputWithLabel label="neco"/>
        <Hello name= "One" helloGreeting="Hola"/>
        <Hello name= "Two"/>
        <Hello name= "Three"/>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Hello extends Component{
  render(){
    return(
      <div>
        {this.props.helloGreeting || 'Hello'}, {this.props.name}!
      </div>
    );
  }
}


export default App;
