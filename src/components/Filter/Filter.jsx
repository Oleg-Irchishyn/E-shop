import React from 'react';
import { Menu } from 'semantic-ui-react'
import Proptypes from 'prop-types';

export default class Filter extends React.Component {
  state = { activeItem: 'All' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='All'
          active={activeItem === 'All'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Popular'
          active={activeItem === 'Popular'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Price(high)'
          active={activeItem === 'Price(high)'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Price(low)'
          active={activeItem === 'Price(low)'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Author'
          active={activeItem === 'Author'}
          onClick={this.handleItemClick}
        />
      </Menu>

    )
  }
}
