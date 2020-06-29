import React from 'react';
import styles from './App.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import *as booksActions from './redux/reducers/booksReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import { getBooks, checkBooksIsready, filterBy } from './redux/selectors/booksSelectors';
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
    const { books, isReady, setFilter, filterBy } = this.props;
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <Container>
        <TopMenu />
        <Filter setFilter={setFilter} filterBy={filterBy} />
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
  isReady: checkBooksIsready(state),
  filterBy: filterBy(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
  ...bindActionCreators(booksActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

