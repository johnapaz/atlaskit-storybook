import React from 'react';
import { Grid, GridColumn } from '@atlaskit/page';

const GridSystem = ({ columns }) => {
  return (
    <Grid>
      {columns.map((col, index) => (
        <GridColumn medium={col.size} key={index}>
          {col.content}
        </GridColumn>
      ))}
    </Grid>
  );
};

export default GridSystem;
