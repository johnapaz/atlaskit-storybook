import React from 'react';
import CustomList from './List';

export default {
  title: 'ContentDisplay/List',
  component: CustomList,
};

const Template = (args) => <CustomList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};
