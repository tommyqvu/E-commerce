import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import { checkUserSessionAction } from './redux/user/user.actions';

import {GlobalStyle} from "./global.styles"
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Authentication from './pages/Authentication/Authentication.component';
import Checkout from './pages/checkout/checkout.component';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div >
    <GlobalStyle/>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <Authentication />
          }
        />
      </Switch>
    </div>
  );
};

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
