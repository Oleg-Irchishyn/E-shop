import React from 'react';
import styles from './App.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/reducers/appReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import { getBooks } from './redux/selectors/booksSelectors';
import Preloader from './components/common/Preloader/Preloader';
import { setBooks, setBooksSuccess } from './redux/reducers/booksReducer';


/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

class App extends React.Component {
  componentDidMount() {
    const { setBooksSuccess } = this.props
    setBooksSuccess();
  }
  render() {
    const { books } = this.props;
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={styles.container}>
        <ul>
          {books && books.map(book => (
            <li><b>{book.title}</b> - {book.author}</li>
          ))}
        </ul>
        <h1>Hello World</h1>
        {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> - React Suspense example*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state),
  books: getBooks(state)
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

