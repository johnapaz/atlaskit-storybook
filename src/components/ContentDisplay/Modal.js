import React, { useState } from 'react';
import { ModalDialog, Button } from '@atlaskit/modal-dialog';

const CustomModal = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button appearance="primary" onClick={openModal}>
        Open Modal
      </Button>
      {isOpen && (
        <ModalDialog heading={heading} onClose={closeModal}>
          {content}
          <Button appearance="primary" onClick={closeModal}>
            Close
          </Button>
        </ModalDialog>
      )}
    </>
  );
};

export default CustomModal;
