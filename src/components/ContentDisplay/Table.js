import React from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';

const CustomTable = ({ head, rows }) => {
  return <DynamicTableStateless head={head} rows={rows} />;
};

export default CustomTable;
