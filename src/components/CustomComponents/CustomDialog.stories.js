import React from 'react';
import CustomDialog from './CustomDialog';

export default {
  title: 'CustomComponents/CustomDialog',
  component: CustomDialog,
};

const Template = (args) => <CustomDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Title',
  content: 'Dialog content goes here.',
  onConfirm: () => alert('Confirmed!'),
};
