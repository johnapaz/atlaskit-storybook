import React from 'react';
import CustomIcon from './Icon';

export default {
  title: 'VisualEnhancements/Icon',
  component: CustomIcon,
};

const Template = (args) => <CustomIcon {...args} />;

export const Atlassian = Template.bind({});
Atlassian.args = {
  type: 'atlassian',
};

export const Jira = Template.bind({});
Jira.args = {
  type: 'jira',
};

export const Confluence = Template.bind({});
Confluence.args = {
  type: 'confluence',
};
