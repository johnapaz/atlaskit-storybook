import React from 'react';
import CustomAvatar from './Avatar';

export default {
  title: 'VisualEnhancements/Avatar',
  component: CustomAvatar,
};

const Template = (args) => <CustomAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  name: 'John Doe',
  size: 'large',
};
