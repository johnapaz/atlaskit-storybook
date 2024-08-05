import React from 'react';
import { Pagination } from '@atlaskit/pagination';

const PaginationControl = ({ totalPages, onChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination
      pages={pages}
      onChange={(event, page) => onChange(page)}
    />
  );
};

export default PaginationControl;
