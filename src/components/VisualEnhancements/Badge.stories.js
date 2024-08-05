import React from 'react';
import CustomBadge from './Badge';

export default {
  title: 'VisualEnhancements/Badge',
  component: CustomBadge,
};

const Template = (args) => <CustomBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  appearance: 'default',
  value: '1',
};
