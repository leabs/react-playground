// This component creates a counter using state. This must be in class component
import React from "react";

export class ImageSlider extends React.Component{
    //We need a constructor if we are passing in a prop inside the state, like how this.state uses prop.initialCount. If this is not the case the constructor isnt required
    state = {
        images: [
                "https://bellavistapoa.com/wp-content/uploads/2019/02/Mallard-Ducks.jpg",
                "https://www.kellogggarden.com/wp-content/uploads/2018/01/raising-ducks.jpg"
        ],
        idx: 0
    };

    handleNext = () => {
        this.setState({
          idx: this.state.idx + 1
        });
    };


    render() {
      return (
        <div>
            <button
                // Passing lambda function inside onClick, this is a messier way to do it
                onClick={() => {
                    this.setState({
                    idx: this.state.idx - 1
                 });
            }}
        >
          previous
        </button>
            
        <img 
            style={{
                width: 400
            }}
            src={this.state.images[this.state.idx]} />
            <button onClick={this.handleNext}>Next</button>
        </div>
      );
    }
  }
