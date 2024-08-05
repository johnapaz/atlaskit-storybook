import React from 'react';
import { TextField } from '@atlaskit/textfield';
import { Button } from '@atlaskit/button';

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex' }}>
      <TextField
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button appearance="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
