import React from 'react';
import { AtlassianIcon, JiraIcon, ConfluenceIcon } from '@atlaskit/logo';

const CustomIcon = ({ type }) => {
  switch (type) {
    case 'atlassian':
      return <AtlassianIcon size="large" />;
    case 'jira':
      return <JiraIcon size="large" />;
    case 'confluence':
      return <ConfluenceIcon size="large" />;
    default:
      return null;
  }
};

export default CustomIcon;
