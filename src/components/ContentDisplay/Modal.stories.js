import React from 'react';
import CustomModal from './Modal';

export default {
  title: 'ContentDisplay/Modal',
  component: CustomModal,
};

const Template = (args) => <CustomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Modal Heading',
  content: 'Modal content goes here.',
};
