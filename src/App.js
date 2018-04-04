import React, { Component, Fragment } from "react";

import Header from "./components/Header";
import ColorSwatch from "./components/ColorSwatch";
import ExampleText from "./components/ExampleText";

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
