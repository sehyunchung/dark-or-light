import React from "react";

const ColorSwatch = props => {
  return (
    <input
      className="color-swatch"
      type="color"
      value={props.color}
      onChange={props.handleColorChange}
    />
  );
};

export default ColorSwatch;
