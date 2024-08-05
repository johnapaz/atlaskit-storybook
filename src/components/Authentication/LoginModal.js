import React, { useState } from 'react';
import { ModalDialog, Button } from '@atlaskit/modal-dialog';

const LoginModal = ({ platform }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button appearance="primary" onClick={openModal}>
        Log in with {platform}
      </Button>
      {isOpen && (
        <ModalDialog heading={`Log in to ${platform}`} onClose={closeModal}>
          <p>Please log in to continue.</p>
          <Button appearance="primary" onClick={closeModal}>
            Close
          </Button>
        </ModalDialog>
      )}
    </>
  );
};

export default LoginModal;
