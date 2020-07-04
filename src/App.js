import React from 'react';
import orderBy from "lodash/orderBy";
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import *as booksActions from './redux/reducers/booksReducer';
import *as cartActions from './redux/reducers/cartReducer';
import *as filterActions from './redux/reducers/filterReducer';
import { initializeAppSucess } from './redux/selectors/appSelectors';
import { getAllBooks, checkBooksIsready, filterBy } from './redux/selectors/booksSelectors';
import { searchQuery } from './redux/selectors/filterSelectors';
import { totalItemsPrice, cartItemsLength, cartItems } from './redux/selectors/cartSelectors';
import Preloader from './components/common/Preloader/Preloader';
import TopMenu from "./components/TopMenu/TopMenu";
import BookCard from "./components/BookCard/BookCard";
import Filter from "./components/Filter/Filter";
import PropTypes from 'prop-types';
import "./app.scss";

class App extends React.Component {
  componentDidMount() {
    const { setBooksSuccess, initializeApp } = this.props
    setBooksSuccess();
    initializeApp();
  }

  render() {
    const { books, isReady, setFilter,
      filterBy, searchQuery, setSearchQuery,
      totalPrice, count, addBookToCart, removeBookFromCart,
      cartItems, initialized } = this.props;

    if (!initialized) {
      return <Preloader />
    }
    return (
      <Container>
        <div className="header" id="header">
          <TopMenu totalPrice={totalPrice} count={count} removeBookFromCart={removeBookFromCart} cartItems={cartItems} />
          <Filter setFilter={setFilter} filterBy={filterBy} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <Card.Group className="ui stackable four column grid">
          {!isReady ? <Preloader /> : books.map(book => (
            <BookCard key={book.id} {...book} addBookToCart={addBookToCart} />
          ))}
        </Card.Group>
      </Container>
    )
  }
}

const makeStickyHeader = () => {
  let header = document.getElementById("header");
  let sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = makeStickyHeader;

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'Price(high)':
      return orderBy(books, 'price', 'desc')
    case 'Price(low)':
      return orderBy(books, 'price', 'asc')
    case 'Author':
      return orderBy(books, 'Author', 'asc')
    default:
      return books;
  }
}

const filterBooks = (books, searchQuery) =>
  books.filter(
    obj =>
      obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      obj.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

export const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
};

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
  setBooksSuccess: PropTypes.func.isRequired,
  initializeApp: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  initialized: initializeAppSucess(state),
  books: getAllBooks(state),
  isReady: checkBooksIsready(state),
  filterBy: filterBy(state),
  searchQuery: searchQuery(state),
  totalPrice: totalItemsPrice(state),
  count: cartItemsLength(state),
  cartItems: cartItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
  ...bindActionCreators(cartActions, dispatch)
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

