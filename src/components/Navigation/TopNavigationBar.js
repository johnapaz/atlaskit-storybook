import React from 'react';
import { AtlassianNavigation, PrimaryButton, Profile, SignIn } from '@atlaskit/atlassian-navigation';
import { AtlassianIcon, AtlassianWordmark } from '@atlaskit/logo';

const TopNavigationBar = ({ primaryItems, profileItems, signInItems }) => {
  return (
    <AtlassianNavigation
      label="site"
      primaryItems={primaryItems}
      renderProductHome={() => (
        <a href="/">
          <AtlassianIcon size="medium" />
          <AtlassianWordmark />
        </a>
      )}
      renderProfile={() => <Profile items={profileItems} />}
      renderSignIn={() => <SignIn items={signInItems} />}
    />
  );
};

export default TopNavigationBar;
