import React from 'react';
import { Button } from '@atlaskit/button';

const CustomButton = ({ text, onClick }) => {
  return (
    <Button appearance="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
