import React from "react";

import LogoEmoji from "../components/LogoEmoji";

const ExampleText = props => {
  return (
    <div className="example-text" style={{ color: props.txtColor }}>
      {props.result ? (
        props.result === "dark" ? (
          "어두움!"
        ) : (
          "밝음!"
        )
      ) : (
        <LogoEmoji />
      )}
    </div>
  );
};

export default ExampleText;
