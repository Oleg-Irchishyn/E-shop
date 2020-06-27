import React from 'react';
import styles from './App.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/reducers/appReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import { getBooks, checkBooksIsready } from './redux/selectors/booksSelectors';
import Preloader from './components/common/Preloader/Preloader';
import { setBooks, setBooksSuccess } from './redux/reducers/booksReducer';
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import BookCard from "./components/BookCard/BookCard";



/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

class App extends React.Component {
  componentDidMount() {
    const { setBooksSuccess } = this.props
    setBooksSuccess();
  }
  render() {
    const { books, isReady } = this.props;
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Container>
        <HeaderMenu />
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

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state),
  books: getBooks(state),
  isReady: checkBooksIsready(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    initializeApp: () => {
      dispatch(initializeApp());
    },
    setBooks: (books) => {
      dispatch(setBooks(books))
    },
    setBooksSuccess: () => {
      dispatch(setBooksSuccess())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

