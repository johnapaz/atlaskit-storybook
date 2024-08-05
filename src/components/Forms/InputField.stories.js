import React, { useState } from 'react';
import InputField from './InputField';

export default {
  title: 'Forms/InputField',
  component: InputField,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Input Field',
  placeholder: 'Enter text...',
};
