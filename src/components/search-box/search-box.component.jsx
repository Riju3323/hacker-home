import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => (
  <div className='searchbdiv'>
  <input
    className='search-box'
    type='search'
    placeholder='Search by Name....'
    onChange={props.onSearchChange}
  />
  </div>
);