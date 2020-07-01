
import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import ImagePlaceholder from "../../assets/images/book_cover_placholder.png"
import *as cartActions from './../../redux/reducers/cartReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

const BookCard = (book) => {
  const { title, author, price, image, addBookToCart, addedCount } = book
  return (
    <Card>
      <Image src={image ? ImagePlaceholder : null} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='rub' />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addBookToCart.bind(this, book)}>
        Add to Cart {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  )
}

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((bookCount, book) => bookCount + (book.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(BookCard);


