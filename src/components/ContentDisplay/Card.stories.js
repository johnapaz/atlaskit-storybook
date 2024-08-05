import React from 'react';
import CustomCard from './Card';

export default {
  title: 'ContentDisplay/Card',
  component: CustomCard,
};

const Template = (args) => <CustomCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Card Header',
  content: 'Card content goes here.',
};
