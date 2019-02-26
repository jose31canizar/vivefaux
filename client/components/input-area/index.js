import React from "react";
import "./index.styl";

const InputArea = ({
  value,
  field,
  type,
  label,
  placeholder,
  setState,
  rightIcon,
  datalist,
  datalistName
}) => (
  <div class="input-area-container">
    <label>{label}</label>
    <textarea
      class="input-area"
      rows="5"
      value={value}
      onChange={event => setState(byPropKey(field, event.target.value))}
      type={type}
      placeholder={placeholder}
      list={datalistName}
    />
    {datalist}
    {rightIcon}
  </div>
);

export const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default InputArea;
