import React, { Component } from "react";
import './App.css';
//import { Component } from 'react';
// import { Body, Body2 } from './components/Body'
// import { Header } from "./components/Header";
// import { Counter } from "./components/Counter";
//import { ImageSlider } from "./components/ImageSlider";
//import { Counter } from "./components/Counter";
import MyForm from "./components/MyForm";
class App extends Component {
  state = {
      visible: true,
  }
  render(){
    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}


export default App;
