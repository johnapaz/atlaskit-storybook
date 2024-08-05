import React from 'react';
import LoginButton from './LoginButton';

export default {
  title: 'Authentication/Login Button',
  component: LoginButton,
};

const Template = (args) => <LoginButton {...args} />;

export const Notion = Template.bind({});
Notion.args = {
  platform: 'Notion',
};

export const Confluence = Template.bind({});
Confluence.args = {
  platform: 'Confluence',
};
