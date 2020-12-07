import React, { Component } from "react";
import './App.css';
//import { Component } from 'react';
// import { Body, Body2 } from './components/Body'
// import { Header } from "./components/Header";
// import { Counter } from "./components/Counter";
import { ImageSlider } from "./components/ImageSlider";
import { Counter } from "./components/Counter";
class App extends Component {
  state = {
      visible: true,
      whichComponentToShow: 'ImageSlider'
  }
  render(){

    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
      <div className="App">
        <ImageSlider />
        <button onClick={() => {
          this.setState({ whichComponentToShow: "Counter"});
        }}
        >Show Counter</button>
      </div>
      );
    } else if (this.state.whichComponentToShow === "Counter"){
      return (
        <div className="App">
          <Counter initialCount={0} />
        </div>
      );
    }

    return null;
  }
}

export default App;
