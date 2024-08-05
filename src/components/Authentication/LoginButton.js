import React from 'react';
import { Button } from '@atlaskit/button';

const LoginButton = ({ platform }) => {
  const handleLogin = () => {
    console.log(`Logging in with ${platform}`);
  };

  return (
    <Button appearance="primary" onClick={handleLogin}>
      Log in with {platform}
    </Button>
  );
};

export default LoginButton;
