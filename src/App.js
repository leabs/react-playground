import React from "react";
import './App.css';
//import { Component } from 'react';
// import { Body, Body2 } from './components/Body'
// import { Header } from "./components/Header";
// import { Counter } from "./components/Counter";
import { ImageSlider } from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      {/* <Header title="Hey this is a title" 
              num={7} 
              myArr={[10,2,3]} 
              myFunc={(a,b)=> a+b}
              myObject={{
                a: 5,
                b: 6
      }} />
      <Body text="i am cool" text2="hey again" />
      <Body2 />
      <Counter initialCount={0} />
      <Counter initialCount={10} /> */}
      <ImageSlider />
    </div>
  );
}

export default App;
