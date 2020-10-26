import React, { useEffect } from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './topMenu.scss'

const Cart = ({ title, id, image, removeBookFromCart}) => {
  return (
    <List selection divided verticalAlign='middle'>
      <List.Item>
        <List.Content>
          <Image avatar src={image} />
          <span>{title}</span>
        </List.Content>
        <List.Content>
          <Button onClick={removeBookFromCart.bind(this, id)} color="red">Remove</Button>
        </List.Content>
      </List.Item>
    </List>
  )
}

const TopMenu = ({ totalPrice, count, cartItems, removeBookFromCart }) => {
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Menu>
      <Menu.Item name='title'>
        <span>Books Shop</span>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item name='total'>
          <span>Total:</span>
          <b>{totalPrice}</b>
          <span>rub.</span>
        </Menu.Item>
        <Popup id="cart-popup"
          trigger={
            <Menu.Item name='cart'>
              <span>Cart:</span>
              <b>({count})</b>
            </Menu.Item>}
          content={cartItems.map(book => <Cart {...book} key={book.id} removeBookFromCart={removeBookFromCart.bind(this, book.id)}/>)} on="click"
          basic
          position='top right'
        />
      </Menu.Menu>
    </Menu>
  )
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  removeBookFromCart: PropTypes.func
}

TopMenu.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  cartItems: PropTypes.array.isRequired
}

export default TopMenu;
