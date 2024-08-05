import React from 'react';
import CustomButton from './CustomButton';

export default {
  title: 'CustomComponents/CustomButton',
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
  onClick: () => alert('Button clicked!'),
};
