import React from 'react';
import GridSystem from './GridSystem';

export default {
  title: 'Layout/GridSystem',
  component: GridSystem,
};

const Template = (args) => <GridSystem {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { size: 4, content: 'Column 1' },
    { size: 4, content: 'Column 2' },
    { size: 4, content: 'Column 3' },
  ],
};
