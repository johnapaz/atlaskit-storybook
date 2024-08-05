import React, { useState } from 'react';
import { ModalDialog, Button } from '@atlaskit/modal-dialog';

const CustomDialog = ({ title, content, onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button appearance="primary" onClick={openDialog}>
        Open Dialog
      </Button>
      {isOpen && (
        <ModalDialog
          heading={title}
          onClose={closeDialog}
          actions={[
            { text: 'Cancel', onClick: closeDialog },
            { text: 'Confirm', onClick: () => { onConfirm(); closeDialog(); } },
          ]}
        >
          {content}
        </ModalDialog>
      )}
    </>
  );
};

export default CustomDialog;
