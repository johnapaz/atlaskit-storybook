import React from 'react';
import Select from '@atlaskit/select';

const Dropdown = ({ options, placeholder, onChange }) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Dropdown;
