import React from 'react';
import { TextField } from '@atlaskit/textfield';

const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
