import React from 'react';
import Toast from './Toast';

export default {
  title: 'Feedback/Toast',
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  appearance: 'info',
  title: 'Info Toast',
  description: 'This is an info toast message.',
  id: '1',
  onDismiss: () => alert('Toast dismissed!'),
};
