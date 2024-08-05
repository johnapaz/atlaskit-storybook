import React from 'react';
import { Checkbox } from '@atlaskit/checkbox';

const CustomCheckbox = ({ label, isChecked, onChange }) => {
  return (
    <Checkbox
      label={label}
      isChecked={isChecked}
      onChange={onChange}
    />
  );
};

export default CustomCheckbox;
