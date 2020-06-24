import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import { initializeAppSelector } from './redux/appSelectors';
import Preloader from './components/common/Preloader/Preloader';

/* React Lazy example
const DialogsContainer = React.lazy(() => import('./components/Dialogs/ProfileContainer'));
*/

class App extends React.Component {
  componentDidMount() {
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={styles.App}>
        <img alt="App-logo" className={styles.AppLogo} src={logo} />
        <Switch>
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          {/* <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} /> - React Suspense example*/}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    initializeApp: () => {
      dispatch(initializeApp());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

