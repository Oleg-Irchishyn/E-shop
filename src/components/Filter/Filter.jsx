import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import Proptypes from 'prop-types';
import { createSecondaryMenuItem } from '../../redux/utils/oblects-helpers';



const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
  const setQuerySuccess = (e) => {
    setSearchQuery(e.target.value);
  }
  return (
    <Menu secondary>
      {createSecondaryMenuItem('All', filterBy === 'All', setFilter.bind(this, 'All'))}
      {createSecondaryMenuItem('Price(high)', filterBy === 'Price(high)', setFilter.bind(this, 'Price(high)'))}
      {createSecondaryMenuItem('Price(low)', filterBy === 'Price(low)', setFilter.bind(this, 'Price(low)'))}
      {createSecondaryMenuItem('Author', filterBy === 'Author', setFilter.bind(this, 'Author'))}
      <Menu.Item>
        <Input icon='search'
          onChange={setQuerySuccess}
          placeholder='Search books...'
          value={searchQuery} />
      </Menu.Item>
    </Menu>

  )
}

export default Filter;
