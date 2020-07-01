import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import Proptypes from 'prop-types';
import { createTopMenuItem } from '../../redux/utils/oblects-helpers';

const Cart = ({ title, id, image, removeBookFromCart }) => {
  return (
    <List selection divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button onClick={removeBookFromCart.bind(this, id)} color="red">Remove</Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  )
}

export default class TopMenu extends React.Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    const { totalPrice, count, cartItems } = this.props
    return (
      <Menu>
        {createTopMenuItem('browse', activeItem === 'browse', this.handleItemClick, "Books Shop")}
        <Menu.Menu position='right'>
          <Menu.Item name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}>
            Total:&nbsp; <b>{totalPrice}</b> &nbsp;rub.
         </Menu.Item>

          <Popup
            trigger={
              <Menu.Item name='help'
                active={activeItem === 'help'}
                onClick={this.handleItemClick}>
                Cart:&nbsp;(<b>{count}</b>)
         </Menu.Item>
            }
            content={cartItems.map(book => <Cart {...book} />)}
            on="click"
            hideOnScroll
          />

        </Menu.Menu>
      </Menu>
    )
  }
}
