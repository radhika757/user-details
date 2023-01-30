import React from "react";
import butstyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={butstyle.button} type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
