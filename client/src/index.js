import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ApolloProvider } from 'react-apollo';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloClient } from 'apollo-boost';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000',
// });
// const cache = new InMemoryCache();
// const client = new ApolloClient({
//   link: httpLink,
//   cache,
// });

ReactDOM.render(

    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
,
  document.getElementById('root'),
);

serviceWorker.unregister();
