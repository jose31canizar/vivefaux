import React from "react";
import "./InputField.styl";
const InputField = ({
  value,
  field,
  type,
  label,
  placeholder,
  setState,
  rightIcon,
  datalist,
  datalistName,
  onFocus,
  onBlur
}) => (
  <div class="input-field-container">
    <label>{label}</label>
    <input
      class="input-field"
      value={value}
      onChange={event => setState(byPropKey(field, event.target.value))}
      type={type}
      placeholder={placeholder}
      list={datalistName}
      onFocus={onFocus}
      onBlur={onBlur}
    />
    {datalist}
    {rightIcon}
  </div>
);

export const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default InputField;
