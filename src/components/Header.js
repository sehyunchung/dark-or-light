import React from "react";

const Header = props => {
  return (
    <h1 className="header" style={{ color: props.txtColor }}>
      {props.title}
    </h1>
  );
};

export default Header;
