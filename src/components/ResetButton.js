import React from "react";

const ResetButton = props => {
  return (
    <div className="reset-button" type="button" onClick={props.onClick}>
      reset
    </div>
  );
};

export default ResetButton;
