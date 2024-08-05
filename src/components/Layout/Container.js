import React from 'react';
import { Box } from '@atlaskit/primitives';

const Container = ({ children }) => {
  return (
    <Box padding="16px" backgroundColor="neutral0">
      {children}
    </Box>
  );
};

export default Container;
