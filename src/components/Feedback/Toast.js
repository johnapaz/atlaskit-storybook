import React from 'react';
import { FlagGroup, AutoDismissFlag } from '@atlaskit/flag';

const Toast = ({ appearance, title, description, id, onDismiss }) => {
  return (
    <FlagGroup onDismissed={onDismiss}>
      <AutoDismissFlag
        id={id}
        appearance={appearance}
        title={title}
        description={description}
      />
    </FlagGroup>
  );
};

export default Toast;
