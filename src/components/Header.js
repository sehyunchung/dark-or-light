import React from "react";

const Header = props => {
  return (
    <h1 style={{ color: props.txtColor }} className="header">
      {props.title}
    </h1>
  );
};

export default Header;
