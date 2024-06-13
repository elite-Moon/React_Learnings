import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry'];

  const filterItem = items.filter((item) => item.includes(searchTerm));

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        placeholder='search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filterItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
