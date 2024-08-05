import React from 'react';
import { NavigationContainer, Section, SideNavigation } from '@atlaskit/side-navigation';
import { HomeIcon, DashboardIcon, SettingsIcon } from '@atlaskit/icon';

const SidebarNavigation = ({ items }) => {
  return (
    <NavigationContainer>
      <SideNavigation label="Sidebar Navigation">
        <Section>
          {items.map((item, index) => (
            <SideNavigation.Item
              key={index}
              icon={item.icon}
              href={item.href}
            >
              {item.label}
            </SideNavigation.Item>
          ))}
        </Section>
      </SideNavigation>
    </NavigationContainer>
  );
};

export default SidebarNavigation;
