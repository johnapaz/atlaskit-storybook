import React from 'react';
import Tooltip from '@atlaskit/tooltip';
import { Button } from '@atlaskit/button';

const CustomTooltip = ({ content, children }) => {
  return (
    <Tooltip content={content}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
