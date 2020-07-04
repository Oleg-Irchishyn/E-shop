import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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

const TopMenu = ({ totalPrice, count, cartItems }) => {
  return (
    <Menu>
      <Menu.Item name='title'>Books Shop</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item name='total'> Total:&nbsp; <b>{totalPrice}</b> &nbsp;rub.</Menu.Item>
        <Popup
          trigger={<Menu.Item name='cart'>Cart:&nbsp;(<b>{count}</b>)</Menu.Item>}
          content={cartItems.map(book => <Cart {...book} key={book.id} />)} on="click"
        />
      </Menu.Menu>
    </Menu>
  )
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  removeBookFromCart: PropTypes.func.isRequired
}

TopMenu.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired
}


export default TopMenu;
