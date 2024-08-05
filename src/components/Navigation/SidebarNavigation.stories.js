import React from 'react';
import SidebarNavigation from './SidebarNavigation';
import { HomeIcon, DashboardIcon, SettingsIcon } from '@atlaskit/icon';

export default {
  title: 'Navigation/SidebarNavigation',
  component: SidebarNavigation,
};

const Template = (args) => <SidebarNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', icon: <HomeIcon />, href: '#' },
    { label: 'Dashboard', icon: <DashboardIcon />, href: '#' },
    { label: 'Settings', icon: <SettingsIcon />, href: '#' },
  ],
};
