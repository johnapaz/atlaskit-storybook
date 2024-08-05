import React from 'react';
import LoginModal from './LoginModal';

export default {
  title: 'Authentication/Login Modal',
  component: LoginModal,
};

const Template = (args) => <LoginModal {...args} />;

export const Notion = Template.bind({});
Notion.args = {
  platform: 'Notion',
};

export const Confluence = Template.bind({});
Confluence.args = {
  platform: 'Confluence',
};
