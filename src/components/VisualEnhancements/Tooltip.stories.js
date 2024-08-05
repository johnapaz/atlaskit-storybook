import React from 'react';
import CustomTooltip from './Tooltip';
import { Button } from '@atlaskit/button';

export default {
  title: 'VisualEnhancements/Tooltip',
  component: CustomTooltip,
};

const Template = (args) => (
  <CustomTooltip {...args}>
    <Button appearance="primary">Hover me</Button>
  </CustomTooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: 'This is a tooltip',
};
