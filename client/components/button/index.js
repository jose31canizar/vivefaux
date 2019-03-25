import React from "react";
import "./index.styl";

const Button = ({ attempt, action, disabled, htmlFor, label, className }) => (
  <div className="button-wrapper" onMouseDown={attempt}>
    <button
      className={`button ${className}`}
      onMouseDown={action}
      disabled={disabled}
    >
      <label for={!disabled && htmlFor}>{label}</label>
    </button>
  </div>
);
export default Button;
