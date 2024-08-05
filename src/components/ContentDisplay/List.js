import React from 'react';
import { ListGroup, ListGroupItem } from '@atlaskit/list';

const CustomList = ({ items }) => {
  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroupItem key={index}>{item}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CustomList;
