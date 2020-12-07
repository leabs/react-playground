import React from "react";


export class Header extends React.Component{
    render() {
      return (
        <header>
          <h1>{this.props.title}</h1>
          <div>{this.props.num}</div>
          <div>{this.props.myObject.a}</div>
          <div>{this.props.myObject.b}</div>
          <div>{this.props.myArr[0]}</div>
          <div>{this.props.myFunc(10,22)}</div>
        </header>
      );
    }
  }
