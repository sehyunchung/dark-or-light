import React from "react";

const ExampleText = props => {
  return (
    <div
      className="example-text"
      style={{ background: props.bgColor, color: props.txtColor }}
    >
      {`${props.result}!`}
    </div>
  );
};

export default ExampleText;
