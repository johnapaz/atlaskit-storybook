import React from 'react';
import Container from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a container',
};
