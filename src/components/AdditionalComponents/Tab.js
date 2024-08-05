import React from 'react';
import { Tab, Tabs } from '@atlaskit/tabs';

const TabComponent = ({ tabs }) => {
  return (
    <Tabs>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabComponent;
