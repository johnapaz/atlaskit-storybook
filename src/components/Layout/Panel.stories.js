import React, { useState } from 'react';
import CustomPanel from './Panel';

export default {
  title: 'Layout/Panel',
  component: CustomPanel,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CustomPanel
      {...args}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  header: 'Panel Header',
  children: 'Panel content goes here.',
};
