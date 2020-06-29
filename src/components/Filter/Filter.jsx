import React from 'react';
import { Menu } from 'semantic-ui-react';
import Proptypes from 'prop-types';
import { createMenuItem } from '../../redux/utils/oblects-helpers';

const Filter = ({ setFilter, filterBy }) => {

  return (
    <Menu secondary>
      {createMenuItem('All', filterBy === 'All', setFilter.bind(this, 'All'))}
      {createMenuItem('Price(high)', filterBy === 'Price(high)', setFilter.bind(this, 'Price(high)'))}
      {createMenuItem('Price(low)', filterBy === 'Price(low)', setFilter.bind(this, 'Price(low)'))}
      {createMenuItem('Author', filterBy === 'Author', setFilter.bind(this, 'Author'))}
    </Menu>

  )
}

export default Filter;
