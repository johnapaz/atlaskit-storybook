import React from 'react';
import Badge from '@atlaskit/badge';

const CustomBadge = ({ appearance, value }) => {
  return <Badge appearance={appearance}>{value}</Badge>;
};

export default CustomBadge;
