import React, { useRef } from 'react';
import { Button } from '@atlaskit/button';

const FileUpload = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    onFileSelect(event.target.files[0]);
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <Button
        appearance="primary"
        onClick={() => fileInputRef.current.click()}
      >
        Upload File
      </Button>
    </>
  );
};

export default FileUpload;
