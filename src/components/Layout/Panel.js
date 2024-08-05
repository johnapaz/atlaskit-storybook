import React from 'react';
import { Panel } from '@atlaskit/panel';

const CustomPanel = ({ header, children, isOpen, onToggle }) => {
  return (
    <Panel
      header={header}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      {children}
    </Panel>
  );
};

export default CustomPanel;
