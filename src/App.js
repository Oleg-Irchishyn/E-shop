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
import { setBooks } from './redux/reducers/booksReducer';


/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

class App extends React.Component {
  render() {
    const { books } = this.props;
    const { setBooks } = this.props;
    const newBooks = [{
      id: 1,
      title: 'George Orwell -' + new Date()
    }]
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={styles.container}>
        <h1>{books[0].title}</h1>
        <button onClick={setBooks.bind(this, newBooks)}>SET NEW BOOKS</button>
        <Switch>
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> - React Suspense example*/}
        </Switch>
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
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

