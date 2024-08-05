import React from 'react';
import CustomProgressBar from './ProgressBar';

export default {
  title: 'Feedback/ProgressBar',
  component: CustomProgressBar,
};

const Template = (args) => <CustomProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 0.5,
};
