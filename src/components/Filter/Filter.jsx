import React, { useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { createSecondaryMenuItem, createSecondaryMenuInput } from '../../redux/utils/oblectsHelpers';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
  const setQuerySuccess = (e) => {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    setTimeout(function () {
      document.querySelector(".ui.secondary.menu a:nth-of-type(1").click();
    }, 50);
  }, []);

  return (
    <Menu secondary>
      {createSecondaryMenuItem('All', filterBy === 'All', setFilter.bind(this, 'All'))}
      {createSecondaryMenuItem('Price(high)', filterBy === 'Price(high)', setFilter.bind(this, 'Price(high)'))}
      {createSecondaryMenuItem('Price(low)', filterBy === 'Price(low)', setFilter.bind(this, 'Price(low)'))}
      {createSecondaryMenuItem('Author', filterBy === 'Author', setFilter.bind(this, 'Author'))}
      {createSecondaryMenuInput('search', setQuerySuccess, 'Search books...', searchQuery)}
    </Menu>
  )
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired
}

export default Filter;
