import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Authentication from './pages/Authentication/Authentication.component';
import './App.css';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
