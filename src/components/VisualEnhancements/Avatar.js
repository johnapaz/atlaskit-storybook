import React from 'react';
import { Avatar } from '@atlaskit/avatar';

const CustomAvatar = ({ src, name, size }) => {
  return <Avatar src={src} name={name} size={size} />;
};

export default CustomAvatar;
