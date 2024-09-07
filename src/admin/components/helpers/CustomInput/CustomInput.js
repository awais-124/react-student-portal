import React from 'react';
import classes from './CustomInput.module.css';

function CustomInput({
  handler,
  value,
  type,
  name,
  placeholder,
  options = false,
}) {
  if (type === 'select') {
    return (
      <select
        name={name}
        value={value}
        onChange={handler}
        className={classes['input']}
        required
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      required
      className={classes['input']}
      min={name === 'semester' ? 1 : null}
      max={name === 'semester' ? 8 : null}
    />
  );
}

export default CustomInput;
