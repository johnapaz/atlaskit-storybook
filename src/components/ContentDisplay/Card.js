import React from 'react';
import { Card, CardHeader, CardContent } from '@atlaskit/card';

const CustomCard = ({ header, content }) => {
  return (
    <Card>
      <CardHeader>{header}</CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default CustomCard;
