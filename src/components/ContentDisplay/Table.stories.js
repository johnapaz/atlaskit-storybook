import React from 'react';
import CustomTable from './Table';

export default {
  title: 'ContentDisplay/Table',
  component: CustomTable,
};

const Template = (args) => <CustomTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  head: {
    cells: [
      { key: 'name', content: 'Name' },
      { key: 'age', content: 'Age' },
      { key: 'city', content: 'City' },
    ],
  },
  rows: [
    { cells: [{ key: 'name', content: 'John Doe' }, { key: 'age', content: 30 }, { key: 'city', content: 'New York' }] },
    { cells: [{ key: 'name', content: 'Jane Smith' }, { key: 'age', content: 25 }, { key: 'city', content: 'San Francisco' }] },
  ],
};
