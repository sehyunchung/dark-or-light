import React from "react";

const ColorSwatch = props => {
  return (
    <input
      className="color-swatch"
      type="color"
      value={props.color}
      onChange={props.handleColorChange}
      style={{ borderBottom: `solid 1px ${props.txtColor}` }}
    />
  );
};

export default ColorSwatch;
