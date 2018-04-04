import React from "react";

const ExampleText = props => {
  return (
    <div style={{ background: props.bgColor, color: props.txtColor }}>
      Example Text
    </div>
  );
};

export default ExampleText;
