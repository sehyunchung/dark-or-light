import React, { Component, Fragment } from "react";
import brain from "brain.js";

import Header from "./components/Header";
import ColorSwatch from "./components/ColorSwatch";
import ExampleText from "./components/ExampleText";

const network = new brain.NeuralNetwork();
network.train([
  { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
  { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
  { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
  { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
  { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
  { input: { r: 1, g: 0.99, b: 0 }, output: { light: 1 } },
  { input: { r: 1, g: 0.42, b: 0.52 }, output: { dark: 1 } },
  { input: { r: 0.45, g: 0.5, b: 0.98 }, output: { dark: 1 } },
  { input: { r: 0.22, g: 0.58, b: 0.98 }, output: { dark: 1 } },
  { input: { r: 0.18, g: 0.56, b: 0.98 }, output: { dark: 1 } },
  { input: { r: 0.98, g: 0.47, b: 0 }, output: { dark: 1 } },
  { input: { r: 0.12, g: 0.72, b: 0.98 }, output: { dark: 1 } },
  { input: { r: 0.98, g: 0.58, b: 0.46 }, output: { dark: 1 } }
]);

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
    title: "Background color is...",
    bgColor: "#f8f9fa",
    txtColor: "#ced4da",
    result: "?"
  };

  handleColorChange = e => {
    const rgb = getRgb(e.target.value);
    console.log(rgb);
    const result = brain.likely(rgb, network);
    console.log(result);
    this.setState({
      result,
      bgColor: e.target.value,
      txtColor: result === "dark" ? "#f8f9fa" : "#495057"
    });
  };

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} txtColor={this.state.txtColor} />
        <ColorSwatch
          color={this.state.bgColor}
          txtColor={this.state.txtColor}
          handleColorChange={this.handleColorChange}
        />
        <ExampleText
          bgColor={this.state.bgColor}
          txtColor={this.state.txtColor}
          result={this.state.result}
        />
      </Fragment>
    );
  }
}

export default App;
