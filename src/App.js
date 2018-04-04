import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import ColorSwatch from "./components/ColorSwatch";
import ExampleText from "./components/ExampleText";

const getRgb = hex => {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100
      }
    : null;
};

class App extends Component {
  state = {
    title: "brain.js color test",
    color: "#f8f9fa"
  };

  handleColorChange = e => {
    this.setState({
      color: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} />
        <ColorSwatch
          color={this.state.color}
          handleColorChange={this.handleColorChange}
        />
        <ExampleText color={this.state.color} />
      </Fragment>
    );
  }
}

export default App;
