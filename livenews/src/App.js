//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


// import pops types
// import PropTypes from 'prop-types'


// importing th Routers
import { Routes, Route} from "react-router-dom";

export default class App extends Component {
  // Note: we dont't have to decalare the variable using let const and var in it....
  // c = "John";
  // if we want to resolve the value in the c so we have to use "this" keyword in it

  // 1. firstly it cmpiles the JSX code 
  // 2. after it render the code to the page
  
  /* <h1>This is Class Based Components: {this.c}</h1> */
  render() {
    return (
         <div>

{/* 

      Note: there is one issue in the  routing link to the particular link becasue there is a default line called general and due to that react didn't mount to the another link for solve the problem we have to use unique identifier called "key"

 */}
          {/* Setting up the reouter */}

              <Navbar />
              
          <Routes>
              <Route exact path="/" element={<News pageSize={5} country="in" category="general"/>}></Route>

              <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
              <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general"/>}></Route>
              <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>}></Route>
              <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>}></Route>
              <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}></Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>}></Route>
          </Routes>

          {/* Setting up the reouter */}

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
