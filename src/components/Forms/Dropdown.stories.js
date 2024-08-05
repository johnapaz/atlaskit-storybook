import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option...',
  onChange: (selected) => alert(`Selected: ${selected.label}`),
};
