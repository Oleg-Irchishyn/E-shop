import React from 'react';
import styles from './App.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import orderBy from "lodash/orderBy";
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import *as booksActions from './redux/reducers/booksReducer';
import *as cartActions from './redux/reducers/cartReducer';
import *as filterActions from './redux/reducers/filterReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import { getAllBooks, checkBooksIsready, filterBy } from './redux/selectors/booksSelectors';
import { searchQuery } from './redux/selectors/filterSelectors';
import { totalItemsPrice } from './redux/selectors/cartSelectors';
import Preloader from './components/common/Preloader/Preloader';
import TopMenu from "./components/TopMenu/TopMenu";
import BookCard from "./components/BookCard/BookCard";
import Filter from "./components/Filter/Filter";
import Proptypes from 'prop-types';


/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

class App extends React.Component {
  componentDidMount() {
    const { setBooksSuccess } = this.props
    setBooksSuccess();
  }

  render() {
    const { books, isReady, setFilter,
      filterBy, searchQuery, setSearchQuery,
      totalPrice } = this.props;
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Container>
        <TopMenu totalPrice={totalPrice} />
        <Filter setFilter={setFilter} filterBy={filterBy} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Card.Group className="ui four doubling cards">
          {!isReady ? <Preloader /> : books.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </Card.Group>
        {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> - React Suspense example*/}
      </Container>
    )
  }
}

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

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state),
  books: getAllBooks(state),
  isReady: checkBooksIsready(state),
  filterBy: filterBy(state),
  searchQuery: searchQuery(state),
  totalPrice: totalItemsPrice(state)
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

