import React from "react";

const ColorSwatch = props => {
  return (
    <input
      onChange={props.handleColorChange}
      className="color-swatch"
      type="color"
      value={props.color}
    />
  );
};

export default ColorSwatch;
