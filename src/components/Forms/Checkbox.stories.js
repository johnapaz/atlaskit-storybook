import React, { useState } from 'react';
import CustomCheckbox from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  component: CustomCheckbox,
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CustomCheckbox
      {...args}
      isChecked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
};
