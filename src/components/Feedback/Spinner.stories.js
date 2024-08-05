import React from 'react';
import CustomSpinner from './Spinner';

export default {
  title: 'Feedback/Spinner',
  component: CustomSpinner,
};

const Template = (args) => <CustomSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};
