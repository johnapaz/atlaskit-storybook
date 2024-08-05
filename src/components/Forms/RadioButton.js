import React from 'react';
import { Radio } from '@atlaskit/radio';

const RadioButton = ({ label, name, value, onChange }) => {
  return (
    <Radio
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default RadioButton;
