import React from 'react';
import CustomButton from './Button';

export default {
  title: 'Forms/Button',
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Submit',
  onClick: () => alert('Button clicked!'),
};
