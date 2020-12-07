// This component creates a counter using state. This must be in class component
import React from "react";


export class Counter extends React.Component{
    //We need a constructor if we are passing in a prop inside the state, like how this.state uses prop.initialCount. If this is not the case the constructor isnt required
    constructor(props) {
        super(props);

        this.state ={
            //This sets the inital count in the component in app.js
            count: props.initialCount
        };
    }

    //Two functions below that +/- the count
    increment = () =>{
        console.log(this.state);
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () =>{
        console.log(this.state);
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
      return (
        <div>
            <div>count: {this.state.count}</div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
      );
    }
  }
