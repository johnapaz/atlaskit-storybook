import React from 'react';
import TopNavigationBar from './TopNavigationBar';

export default {
  title: 'Navigation/TopNavigationBar',
  component: TopNavigationBar,
};

const Template = (args) => <TopNavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  primaryItems: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'settings', label: 'Settings', href: '/settings' },
  ],
  profileItems: [
    { label: 'Profile', href: '/profile' },
    { label: 'Logout', href: '/logout' },
  ],
  signInItems: [
    { label: 'Sign In', href: '/signin' },
  ],
};
