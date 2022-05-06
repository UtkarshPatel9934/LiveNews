//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  // Note: we dont't have to decalare the variable using let const and var in it....
  c = "John";
  // if we want to resolve the value in the c so we have to use "this" keyword in it

  render() {
    return (
      <div>
        <h1>This is Class Based Components: {this.c}</h1>
      </div>
    )
  }
}




// Function Based Components
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */