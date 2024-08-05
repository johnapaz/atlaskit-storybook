import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <RadioButton
      {...args}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
  name: 'radio-group',
  value: 'radio1',
};
