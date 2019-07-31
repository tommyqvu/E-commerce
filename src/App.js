import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Authentication from './pages/Authentication/Authentication.component';
import Checkout from './pages/checkout/checkout.component';

import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import { checkUserSessionAction } from './redux/user/user.actions';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.props.checkUserSession();
    // const { setCurrentUser, collectionsArray } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfile(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         },
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    //   // Automate moving collections data to firebase
    //   // addCollection(
    //   //   'collections',
    //   //   collectionsArray.map(({title, items}) => ({ title, items })),
    //   // );
    // });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <Authentication />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSessionAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
