import React from 'react';
import TabComponent from './Tab';

export default {
  title: 'AdditionalComponents/Tab',
  component: TabComponent,
};

const Template = (args) => <TabComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ],
};
