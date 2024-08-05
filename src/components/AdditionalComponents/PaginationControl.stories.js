import React from 'react';
import PaginationControl from './PaginationControl';

export default {
  title: 'AdditionalComponents/PaginationControl',
  component: PaginationControl,
};

const Template = (args) => <PaginationControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  onChange: (page) => alert(`Page changed to ${page}`),
};
