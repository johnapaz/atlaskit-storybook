import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'AdditionalComponents/SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  onSearch: (query) => alert(`Searching for ${query}`),
};
