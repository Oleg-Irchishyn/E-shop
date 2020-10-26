
import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import *as cartActions from './../../redux/reducers/cartReducer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './bookCard.scss';

const BookCard = (book) => {
  let { title, author, price, image, addBookToCart, addedCount, rating } = book
  let ratingCount = Math.ceil(rating);
  let ratingStars = [];
  for (let i = 1; i <= ratingCount; i++) {
    ratingStars.push(i);
  }

  return (
    <Card className="book-card">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header className="book-card__header">{title}</Card.Header>
        <Card.Meta>
          <span className='book-card__author'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra className='book-card__extra-content'>
        <a>
          <Icon name='rub' />
          {price}
        </a>
        <div className="book-card__rating-stars">
          {ratingStars.map((s, index) =>
            s = <span key={index} className="fa fa-star checked"></span>)
          }
        </div>
      </Card.Content>
      <Button className="book-card__button" onClick={addBookToCart.bind(this, book)}>
        Add to Cart {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  )
}


BookCard.propTypes = {
  book: PropTypes.object,
  addedCount: PropTypes.number.isRequired,
  addBookToCart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((bookCount, book) => bookCount + (book.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(BookCard);


