import React from 'react';
import { Menu } from 'semantic-ui-react';
import Proptypes from 'prop-types';
import { createTopMenuItem, createTopMenuItemWithCalculations } from '../../redux/utils/oblects-helpers';

export default class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        {createTopMenuItem('browse', activeItem === 'browse', this.handleItemClick, "Books Shop")}
        <Menu.Menu position='right'>
          {createTopMenuItemWithCalculations('signup', activeItem === 'signup', this.handleItemClick, "Total:", "rub.")}
          {createTopMenuItemWithCalculations('help', activeItem === 'help', this.handleItemClick, " Cart:")}
        </Menu.Menu>
      </Menu>
    )
  }
}
